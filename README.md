@dvn/sepet-cli
=================

## Installation
```
npm i sepet-cli -g
```

## Usage
```
sepet upload -b bucket-name-here .
sepet upload -b bucket-name-here ./tsconfig.json
sepet upload -b bucket-name-here ./src/commands
```

## Development

This CLI is created via https://oclif.io/docs/introduction.

Commands can be run as shown below during development.

* Help: `./bin/dev --help`
* Version: `./bin/dev --version`
* Upload file: `./bin/dev upload`

After `npm run build` is ran, the commands can also be run via `./bin/run upload`.

## Publishing a new version

* `npm version (major|minor|patch)` # bumps version, updates README, adds git tag
* `npm publish`
