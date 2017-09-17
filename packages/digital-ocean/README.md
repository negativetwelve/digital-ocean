# digital-ocean

[![npm](https://img.shields.io/npm/v/digital-ocean.svg)](https://www.npmjs.com/package/digital-ocean)
[![npm](https://img.shields.io/npm/dt/digital-ocean.svg)](https://www.npmjs.com/package/digital-ocean)
[![npm](https://img.shields.io/npm/l/digital-ocean.svg)](https://github.com/negativetwelve/digital-ocean/blob/master/LICENSE)

Node SDK for the Digital Ocean v2 API.

## Getting Started

Install `digital-ocean` using `yarn`:

```shell
yarn add digital-ocean
```

## Usage

```javascript
import DigitalOcean from 'digital-ocean';

const run = async () => {
  const client = new DigitalOcean({token: '<YOUR API TOKEN>'});
  const droplet = await client.createDroplet({
    // Options are passed here.
  });

  console.log(droplet);
};

run();
```

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/digital-ocean/issues) or [submit a PR](https://github.com/negativetwelve/digital-ocean/pulls).
