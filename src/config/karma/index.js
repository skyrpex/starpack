import makeWebpackConfig from '../webpack/base'

export default ({ starpack }) => {
  const webpack = makeWebpackConfig({
    starpack,
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
