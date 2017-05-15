import webpack from 'webpack'
import program from 'commander'
import makeConfig from '../config/webpack/once'
import clean from '../clean'

program.command(
  'build',
).description(
  'build for production',
).action(() => {
  // eslint-disable-next-line import/no-dynamic-require
  const starpack = require(`${process.cwd()}/starpack.config`).default

  const compiler = webpack(makeConfig({
    starpack,
    babelEnv: 'build',
  }))

  clean()

  compiler.run((error, stats) => {
    if (error) {
      console.error(error)
      throw error
    }

    console.log(stats.toString({
      colors: true,
    }))
  })
})
