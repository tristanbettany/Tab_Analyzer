<?php

declare(strict_types=1);

namespace App\Commands;

use Gitlab\Exception\RuntimeException;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Gitlab\Client as GitlabClient;
use Exception;

final class ConfigGenCommand extends Command
{
    protected function configure() :void
    {
        $this
            ->setName('config:gen')
            ->setDescription('Generate config for extension')
        ;
    }

    protected function execute(
        InputInterface $input,
        OutputInterface $output
    ) :int {

        $client = new GitlabClient();
        $client->authenticate($_ENV['GITLAB_TOKEN'], GitlabClient::AUTH_HTTP_TOKEN);

        $projects = $client->groups()->projects(
            $_ENV['GROUP_ID'],
            [
                'include_subgroups' => true,
                'per_page' => 100,
                'order_by' => 'updated_at'
            ]
        );

        $repos = [];
        foreach($projects as $project) {
            try {
                $branch = $client->repositories()->branch($project['id'], 'master');
                $composerFile = $client->repositoryFiles()->getRawFile($project['id'], 'composer.json', $branch['commit']['id']);
            } catch(RuntimeException $e) {
                // File or branch wasnt found so continue
                continue;
            }

            preg_match('/"php":\s"(.+)",/', $composerFile, $phpMatches);

            if (
                empty($phpMatches) === false
                && empty($phpMatches[1]) === false
            ) {
                $repos[$project['id']] = [
                    'id' => $project['id'],
                    'name' => $project['name'],
                    'php_version' => $phpMatches[1],
                ];

                preg_match('/"laravel\/framework":\s"(.+)",/', $composerFile, $frameworkMatches);

                if (
                    empty($frameworkMatches) === false
                    && empty($frameworkMatches[1]) === false
                ) {
                    $repos[$project['id']]['framework_version'] = $frameworkMatches[1];
                }
            }
        }

        $jsonArray = [
            'autoAnalyse' => true,
            'domains' => [
                'https://gitlab.com',
            ],
            'htmlReplacements' => [],
            'textReplacements' => [],
        ];

        foreach($repos as $repo) {
            if (empty($repo['framework_version']) === false) {
                $framework = '<div class="c-label v-secondary">laravel/framework '. $repo['framework_version'] .'</div>';
            } else {
                $framework = '';
            }
            $replacement = '<div class="sidebar-context-title">'. $repo['name'] .'</div><div class="c-project-info"><div class="c-label v-primary">PHP '. $repo['php_version'] .'</div>'. $framework .'</div>';

            $jsonArray['htmlReplacements'][] = [
                'regex' => '<div class="sidebar-context-title">\n'. $repo['name'] .'\n</div>',
                'replacement' => $replacement,
                'selector' => '.nav-sidebar-inner-scroll',
            ];
        }

        $jsonArray['injectedCSS'] = file_get_contents(__DIR__ . '/../CSS/gitlab.css');

        file_put_contents(__DIR__ . '/../../output/config.json', json_encode($jsonArray));

        return 0;
    }
}