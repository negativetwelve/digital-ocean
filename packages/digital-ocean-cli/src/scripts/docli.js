#!/usr/bin/env node

// Libraries
import commander from 'commander';
import chalk from 'chalk';

// CLI
import Package from '../../package.json';


const program = new commander.Command('docli')
  .version(Package.version, '-v, --version')
  .arguments('<command>')
  .usage('<command> [options]')
  .on('--help', () => console.log(''))
  .command('droplet', 'create, manage, and destroy droplets');

/**
 * Checks for invalid commands and prints the help if it doesn't exist.
 */
const run = (args) => {
  const names = program.commands.map(command => command._name);
  const input = args[2];

  if (input && !input.startsWith('-') && !names.includes(input)) {
    console.error(chalk.red(`'docli ${input}' is not a valid command.`));
    process.exit(1);
  } else {
    program.parse(args);
  }
};

run(process.argv);
