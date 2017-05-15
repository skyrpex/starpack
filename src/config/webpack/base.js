import {
  DefinePlugin,
} from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import ManifestPlugin from '@skyrpex/manifest-webpack-plugin'
import scssLoaders from './scss-loaders'

export default ({ starpack, babelEnv, extractStyles }) => {
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
                use: scssLoaders({ starpack }),
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
            use: scssLoaders({ starpack }),
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
    resolve: {
      extensions: ['.vue', '.js'],
      alias: {
        '~': starpack.base,
      },
    },
    plugins: [
      new ManifestPlugin(`${starpack.output}/manifest.json`),
      extractor,
    ],
  }
}
