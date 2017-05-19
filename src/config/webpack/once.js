import path from 'path'
import merge from 'webpack-merge'
import { optimize } from 'webpack'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
// import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import starpack from '../../user-config'
import base from './base'

export default ({ babelEnv }) => merge(
  base({
    babelEnv,
    extractStyles: true,
  }),
  {
    entry: starpack.entry,
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[id].[chunkhash].js',
      path: starpack.output.path,
    },
    plugins: [
      new ProgressBarPlugin(),
      // new LodashModuleReplacementPlugin(),
      new optimize.OccurrenceOrderPlugin(),
      new optimize.UglifyJsPlugin({
        sourceMap: true,
      }),
      new optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.[chunkhash:20].js',
        minChunks: module => (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.resolve(__dirname, '../../../../../node_modules'),
          ) === 0
        ),
      }),
      new optimize.CommonsChunkPlugin({
        name: 'manifest',
        chunks: ['vendor'],
      }),
      // new optimize.OccurrenceOrderPlugin(),
      // new ExtractTextPlugin('[name].[contenthash:20].css'),
    ],
  },
)
