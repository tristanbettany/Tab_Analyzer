<?php

declare(strict_types=1);

namespace App\Commands;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

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

        return 0;
    }
}