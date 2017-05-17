#!/usr/bin/env node

const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .demandCommand()
  .command(
    'server', 'Manage servers',
    yargs => yargs
      .demandCommand()
      .command('add', 'Add new server')
      .command('list', 'Server list')
  )
  .command({
    command: 'configure <key> [value]',
    aliases: ['config', 'cfg'],
    desc: 'Set a config variable',
    builder: (yargs) => yargs.default('value', 'true'),
    handler: (argv) => {
      console.log(`setting ${argv.key} to ${argv.value}`)
    }
  })
  .strict()
  .argv

const clonix = require('..')

console.log('clonix cli is not ready to use')
// console.log(argv)
