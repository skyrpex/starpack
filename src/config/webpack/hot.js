import {
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin,
} from 'webpack'
import { mapValues } from 'lodash'
import merge from 'webpack-merge'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import starpack from '../../user-config'
import base from './base'

export default ({ babelEnv, port }) => merge(base({ babelEnv }), {
  devtool: 'eval',
  entry: mapValues(starpack.entry, entry => {
    return [require.resolve('../../hot-reload'), entry]
  }),
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  plugins: [
    new ProgressBarPlugin(),
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
  ],
})
