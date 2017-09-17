#!/usr/bin/env node

// Libraries
import commander from 'commander';
import DigitalOcean from 'digital-ocean';

// CLI
import {guard} from '../utils';


let name;
const program = new commander.Command('docli droplet create')
  .arguments('<name>')
  .usage('<name> [options]')
  .action((input) => {
    name = input;
  })
  .option(
    '--token <token>',
    'Digital Ocean API token required to create droplets.',
  )
  .option(
    '--region [region]',
    'Specify the region for the droplet.',
    'sfo1',
  )
  .option(
    '--size [size]',
    'Specify the size of the droplet.',
    '512mb',
  )
  .option(
    '--image [image]',
    'Specify the image to build the droplet with.',
    'ubuntu-14-04-x64',
  )
  .option(
    '--ssh [sshKeyId]',
    'Specify a ssh key id to add to the droplet.',
  )
  .on('--help', () => console.log(''))
  .parse(process.argv);

guard(async () => {
  try {
    // Parse args from the CLI.
    const {token, region, size, image, ssh: sshKeyId} = program.opts();

    // Create instance of the DigitalOcean client.
    const client = new DigitalOcean({token});

    // Perform the request to create a Droplet.
    const droplet = await client.createDroplet({
      name,
      region,
      size,
      image,
      sshKeys: [sshKeyId],
    });

    console.log([
      'Droplet successfully created!',
      `  id: ${droplet.id}`,
      `  name: ${droplet.name}`,
    ].join('\n'));
  } catch (error) {
    console.error(`An error has occurred: ${error.message}`);
  }
});
