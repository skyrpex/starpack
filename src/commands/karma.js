import { Server } from 'karma'
import program from 'commander'
import makeConfig from '../config/karma'

program.command(
  'karma',
).description(
  'start the testing server',
).action(() => {
  // eslint-disable-next-line import/no-dynamic-require
  const starpack = require(`${process.cwd()}/starpack.config`).default

  const config = makeConfig({ starpack })

  const server = new Server(config, (exitCode) => {
    process.exit(exitCode)
  })

  server.start()
})
