import starpack from '../../user-config'
import makeWebpackConfig from '../webpack/base'

export default () => {
  const webpack = makeWebpackConfig({
    babelEnv: 'test',
  })
  webpack.entry = null
  webpack.devtool = 'inline-source-map'
  webpack.plugins = []

  return {
    frameworks: ['mocha', 'chai-sinon'],
    browsers: ['PhantomJS'],
    reporters: ['spec', 'coverage'],
    files: [
      starpack.tests,
    ],
    preprocessors: {
      [starpack.tests]: ['webpack', 'sourcemap'],
    },
    webpack,
    webpackMiddleware: {
      noInfo: true,
      quiet: true,
      stats: 'errors-only',
    },
  }
}
