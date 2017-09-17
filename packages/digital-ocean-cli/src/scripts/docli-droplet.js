#!/usr/bin/env node

// Libraries
import commander from 'commander';


new commander.Command('docli droplet')
  .usage('<command> [options]')
  .on('--help', () => console.log(''))
  .command('create', 'create a new droplet')
  .parse(process.argv);
