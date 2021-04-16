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

            preg_match('/"php":\s"(.+)",/', $composerFile, $matches);

            if (
                empty($matches) === false
                && empty($matches[1]) === false
            ) {
                $repos[] = [
                    'id' => $project['id'],
                    'name' => $project['name'],
                    'php_version' => $matches[1],
                ];
            }
        }

        var_dump($repos);

        return 0;
    }
}