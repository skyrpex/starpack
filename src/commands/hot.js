import express from 'express'
import webpack from 'webpack'
import program from 'commander'
import devMiddlewre from 'webpack-dev-middleware'
import hotMiddlewre from 'webpack-hot-middleware'
import history from 'connect-history-api-fallback'
import makeConfig from '../config/webpack/hot'
import clean from '../clean'
import starpack from '../user-config'

// Disable deprecation comment for babel (https://github.com/webpack/loader-utils/issues/56#issuecomment-281967053)
process.noDeprecation = true

program.command(
  'hot',
).description(
  'start a HMR enabled development server',
).option(
  '-p, --port <port>', 'the port to serve the application on', 8080,
).action((command) => {
  const compiler = webpack(makeConfig({
    starpack,
    babelEnv: 'build',
    port: command.port,
  }))

  const server = express()

  server.use(history())

  server.use(devMiddlewre(compiler, {
    publicPath: compiler.options.output.publicPath,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    stats: {
      colors: true,
      chunks: false,
    },
  }))

  server.use(hotMiddlewre(compiler))

  clean()

  server.listen(command.port, (error) => {
    if (error) {
      throw error
    }

    // process.stdout.write(`Listening at ${compiler.options.output.publicPath}\n`);
  })
})
