@dvn/sepet-cli
=================

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage
<!-- usage -->
Bucket name is required `-b, --bucket`.

```sh-session
// upload a single file
$ sepet upload -b bucket-name-here ./tsconfig.json

// upload all files inside the current directory
$ sepet upload -b bucket-name-here .

// upload the directory relative to the path
$ sepet upload -b bucket-name-here ./src/commands

// upload the exact path
$ sepet upload -b bucket-name-here /EXACT_PATH/src/commands
```
<!-- usagestop -->

# Commands
<!-- commands -->
* [`sepet help [COMMAND]`](#sepet-help-command)
* [`sepet upload [PATH]`](#sepet-upload-path)

## `sepet upload [PATH]`

Uploads files to Sepet.

```
USAGE
  $ sepet upload [PATH]

OPTIONS
  -b, --bucket=bucket      bucket name that is used as subdomain.
  -e, --endpoint=endpoint  sepet API endpoint to upload the file.
  -h, --help               show CLI help
  -p, --port=port          sepet API port.
  -v, --version=version    bucket version to upload to.

EXAMPLES
  $ sepet upload -b bucket-name-here .
  $ sepet upload -b bucket-name-here ./tsconfig.json
  $ sepet upload -b bucket-name-here ./src/commands
```

_See code: [dist/commands/upload/index.ts](https://github.com/devingen/sepet-cli/blob/v0.0.0/dist/commands/uploadZ/index.ts)_

## `sepet help [COMMAND]`

Display help for sepet.

```
USAGE
  $ sepet help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for sepet.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

<!-- commandsstop -->

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
