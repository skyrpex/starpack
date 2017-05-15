import {
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin,
} from 'webpack'
import merge from 'webpack-merge'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import base from './base'

export default ({ starpack, babelEnv, port }) => merge(base({ starpack, babelEnv }), {
  devtool: 'eval',
  entry: [
    require.resolve('../../hot-reload'),
    starpack.entry,
  ],
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  plugins: [
    new ProgressBarPlugin(),
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
  ],
})
