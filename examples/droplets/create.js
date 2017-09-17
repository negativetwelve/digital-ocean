// Libraries
import DigitalOcean from 'digital-ocean';


const run = async ({TOKEN: token}) => {
  const client = new DigitalOcean({token});
  const droplet = await client.createDroplet({
    name: 'my-droplet',
    region: 'nyc3',
    size: '512mb',
    image: 'ubuntu-14-04-x64',
    sshKeys: ['12345'],
  });

  console.log(droplet);
};

// Run the example.
run(process.env);
