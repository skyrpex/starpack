import { Server } from 'karma'
import program from 'commander'
import makeConfig from '../config/karma'
import starpack from '../user-config'

program.command(
  'karma',
).description(
  'start the testing server',
).action(() => {
  const config = makeConfig({ starpack })

  const server = new Server(config, (exitCode) => {
    process.exit(exitCode)
  })

  server.start()
})
