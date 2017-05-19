import merge from 'webpack-merge'
import base from './base'

export default ({ starpack, babelEnv }) => merge(
  base({ starpack, babelEnv }),
  {
    entry: starpack.entry,
    output: {
      filename: 'bundle.js',
      path: starpack.output,
    },
  },
)
