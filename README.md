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
```sh-session
$ npm install -g sepet-cli
$ sepet COMMAND
running command...
$ sepet (--version)
sepet-cli/0.0.4 darwin-arm64 node-v18.2.0
$ sepet --help [COMMAND]
USAGE
  $ sepet COMMAND
...
```
<!-- usagestop -->

# Commands
<!-- commands -->
* [`sepet help [COMMAND]`](#sepet-help-command)
* [`sepet plugins`](#sepet-plugins)
* [`sepet plugins:install PLUGIN...`](#sepet-pluginsinstall-plugin)
* [`sepet plugins:inspect PLUGIN...`](#sepet-pluginsinspect-plugin)
* [`sepet plugins:install PLUGIN...`](#sepet-pluginsinstall-plugin-1)
* [`sepet plugins:link PLUGIN`](#sepet-pluginslink-plugin)
* [`sepet plugins:uninstall PLUGIN...`](#sepet-pluginsuninstall-plugin)
* [`sepet plugins:uninstall PLUGIN...`](#sepet-pluginsuninstall-plugin-1)
* [`sepet plugins:uninstall PLUGIN...`](#sepet-pluginsuninstall-plugin-2)
* [`sepet plugins update`](#sepet-plugins-update)

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

## `sepet plugins`

List installed plugins.

```
USAGE
  $ sepet plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ sepet plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `sepet plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ sepet plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ sepet plugins add

EXAMPLES
  $ sepet plugins:install myplugin 

  $ sepet plugins:install https://github.com/someuser/someplugin

  $ sepet plugins:install someuser/someplugin
```

## `sepet plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ sepet plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ sepet plugins:inspect myplugin
```

## `sepet plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ sepet plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ sepet plugins add

EXAMPLES
  $ sepet plugins:install myplugin 

  $ sepet plugins:install https://github.com/someuser/someplugin

  $ sepet plugins:install someuser/someplugin
```

## `sepet plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ sepet plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ sepet plugins:link myplugin
```

## `sepet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sepet plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sepet plugins unlink
  $ sepet plugins remove
```

## `sepet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sepet plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sepet plugins unlink
  $ sepet plugins remove
```

## `sepet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sepet plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sepet plugins unlink
  $ sepet plugins remove
```

## `sepet plugins update`

Update installed plugins.

```
USAGE
  $ sepet plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
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
