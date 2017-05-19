import webpack from 'webpack'
import program from 'commander'
import makeConfig from '../config/webpack/once'
import clean from '../clean'

program.command(
  'build',
).description(
  'build for production',
).action(() => {
  const compiler = webpack(makeConfig({
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
