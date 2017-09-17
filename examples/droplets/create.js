// Libraries
import DigitalOcean from 'digital-ocean';


/**
 * Example for how to create a droplet using the SDK.
 */
const run = async ({TOKEN: token, SSH_KEY_ID: sshKeyId}) => {
  const client = new DigitalOcean({token});
  const droplet = await client.createDroplet({
    name: 'my-droplet',
    region: 'nyc3',
    size: '512mb',
    image: 'ubuntu-14-04-x64',
    sshKeys: [sshKeyId],
  });

  console.log(droplet);
};

// Run the example.
run(process.env);
