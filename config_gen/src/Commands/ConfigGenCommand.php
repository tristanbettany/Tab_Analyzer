<?php

namespace App\Commands;

use App\GitlabGenerator;
use Gitlab\Exception\RuntimeException;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
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
            ->addArgument('type', InputArgument::REQUIRED, 'What config type')
        ;
    }

    protected function execute(
        InputInterface $input,
        OutputInterface $output
    ): int {

        if ($input->getArgument('type') === 'gitlab') {
            return $this->gitlab();
        }

        return 1;
    }

    private function gitlab(): int
    {
        $jsonArray = [
            'autoAnalyse' => true,
            'domains' => [
                'https://gitlab.com',
            ],
            'htmlReplacements' => GitlabGenerator::replacements(),
            'textReplacements' => [],
            'injectedCSS' => GitlabGenerator::injectedCSS(),
        ];

        file_put_contents(__DIR__ . '/../../output/gitlab.json', json_encode($jsonArray));

        return 0;
    }
}