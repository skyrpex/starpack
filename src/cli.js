#!/usr/bin/env node
import 'babel-register'
import program from 'commander'
import './commands/clean'
import './commands/hot'
import './commands/once'
import './commands/karma'

program.version('0.0.1')

program.command('*').action(() => {
  program.help()
})

program.parse(process.argv)

if (!program.args.length) {
  program.help()
}
