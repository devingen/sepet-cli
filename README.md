@dvn/sepet-cli
==============

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@dvn/sepet-cli.svg)](https://npmjs.org/package/@dvn/sepet-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@dvn/sepet-cli.svg)](https://npmjs.org/package/@dvn/sepet-cli)
[![License](https://img.shields.io/npm/l/@dvn/sepet-cli.svg)](https://github.com/eluleci/sepet-cli/blob/master/package.json)

CLI for uploading files to Sepet API.

# Installation
<!-- installation -->
```sh-session
$ npm install -g @dvn/sepet-cli
```

# Usage
Bucket name is required `-b, --bucket`.

<!-- usage -->
```sh-session
$ sepet COMMAND
running command...

$ sepet (-v|--version|version)
@dvn/sepet-cli/0.0.1 darwin-x64 node-v12.0.0

$ sepet --help [COMMAND]
USAGE
  $ sepet COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sepet help [COMMAND]`](#sepet-help-command)
* [`sepet upload [PATH]`](#sepet-upload-path)

## `sepet help [COMMAND]`

display help for sepet

```
USAGE
  $ sepet help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

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

_See code: [src/commands/upload.ts](https://github.com/devingen/sepet-cli/blob/v0.0.1/src/commands/upload.ts)_
<!-- commandsstop -->
* [`sepet help [COMMAND]`](#sepet-help-command)
* [`sepet upload [COMMAND]`](#sepet-upload-command)

## `sepet upload [PATH]`

Uploads files to Sepet.

USAGE
$ sepet upload [PATH]

OPTIONS
-b, --bucket=bucket      Bucket name that is used as subdomain.
-e, --endpoint=endpoint  Sepet API endpoint to upload the file.
-h, --help               show CLI help
-p, --port=port          Sepet API port.
-v, --version=version    Bucket version to upload to.

EXAMPLES
$ sepet upload -b bucket-name-here .
$ sepet upload -b bucket-name-here ./tsconfig.json
$ sepet upload -b bucket-name-here ./src/commands

## `sepet help [COMMAND]`

Display help for any command.

```
USAGE
  $ sepet help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

## Development

This CLI is created via https://oclif.io/docs/introduction.

Commands can be run as shown below during development.

* Help: `./bin/run --help`
* Version: `./bin/run --version`
* Upload file: `./bin/run upload`

## Publishing a new version

* `npm version (major|minor|patch)` # bumps version, updates README, adds git tag
* `npm publish`
