import { resolve } from 'path'
import config from '../../user-config'

export default () => [
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
    },
  },
  { loader: 'resolve-url-loader' },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      includePaths: [
        config.context,
        `${process.cwd()}/node_modules`,
        resolve(__dirname, '../../../node_modules'),
      ],
    },
  },
]
