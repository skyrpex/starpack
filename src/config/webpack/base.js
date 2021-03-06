import {
  DefinePlugin,
} from 'webpack'
import { resolve } from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import ManifestPlugin from '@skyrpex/manifest-webpack-plugin'
import scssLoaders from './scss-loaders'
import starpack from '../../user-config'

export default ({ babelEnv, extractStyles }) => {
  const extractor = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: extractStyles == null,
  })

  return {
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            forceEnv: babelEnv,
          },
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              css: extractor.extract({
                use: 'css-loader',
                fallback: 'vue-style-loader',
              }),
              scss: extractor.extract({
                use: scssLoaders(),
                fallback: 'vue-style-loader',
              }),
            },
          },
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
        },
        {
          test: /\.css$/,
          loader: extractor.extract({
            use: 'css-loader',
            fallback: 'style-loader',
          }),
        },
        {
          test: /\.scss$/,
          loader: extractor.extract({
            use: scssLoaders(),
            fallback: 'style-loader',
          }),
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]',
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]',
          },
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
      ],
    },
    resolveLoader: {
      modules: [
        `${process.cwd()}/node_modules`,
        resolve(__dirname, '../../../node_modules'),
      ],
    },
    resolve: {
      extensions: ['.vue', '.js'],
      modules: [
        `${process.cwd()}/node_modules`,
        resolve(__dirname, '../../../node_modules'),
      ],
      alias: {
        '~': starpack.context,
      },
    },
    plugins: [
      new ManifestPlugin(`${starpack.output.path}/manifest.json`),
      extractor,
    ],
  }
}
