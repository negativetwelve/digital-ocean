# Digital Ocean

[![npm](https://img.shields.io/npm/v/digital-ocean.svg)](https://www.npmjs.com/package/digital-ocean)
[![npm](https://img.shields.io/npm/dt/digital-ocean.svg)](https://www.npmjs.com/package/digital-ocean)
[![npm](https://img.shields.io/npm/l/digital-ocean.svg)](https://github.com/negativetwelve/digital-ocean/blob/master/LICENSE)
[![CircleCI](https://img.shields.io/circleci/project/github/negativetwelve/digital-ocean.svg?label=circle)](https://circleci.com/gh/negativetwelve/digital-ocean)
[![Travis](https://img.shields.io/travis/negativetwelve/digital-ocean.svg?label=travis)](https://travis-ci.org/negativetwelve/digital-ocean)
[![AppVeyor](https://img.shields.io/appveyor/ci/negativetwelve/digital-ocean/master.svg?label=appveyor)](https://ci.appveyor.com/project/negativetwelve/digital-ocean)
[![Coveralls](https://img.shields.io/coveralls/negativetwelve/digital-ocean.svg)](https://coveralls.io/github/negativetwelve/digital-ocean?branch=master)

Node SDK and CLI tool for Digital Ocean.

## Getting Started

Install the global CLI via:

```shell
yarn global add digital-ocean-cli
```

This will make the `docli` tool available on your machine.

## SDK

Install `digital-ocean` using `yarn`:

```shell
yarn add digital-ocean
```

Use it within code:

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

## Packages

Package | Version | Description
--------|---------|------------
[`digital-ocean`](/packages/digital-ocean) | [![npm](https://img.shields.io/npm/v/digital-ocean.svg)][npm-digital-ocean] | Node SDK for Digital Ocean
[`digital-ocean-cli`](/packages/digital-ocean-cli) | [![npm](https://img.shields.io/npm/v/digital-ocean-cli.svg)][npm-digital-ocean-cli] | CLI for Digital Ocean

[npm-digital-ocean]: https://www.npmjs.com/package/digital-ocean
[npm-digital-ocean-cli]: https://www.npmjs.com/package/digital-ocean-cli

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/digital-ocean/issues) or [submit a PR](https://github.com/negativetwelve/digital-ocean/pulls).
