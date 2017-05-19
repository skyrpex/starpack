import merge from 'webpack-merge'
import starpack from '../../user-config'
import base from './base'

export default ({ babelEnv }) => merge(
  base({ babelEnv }),
  {
    entry: starpack.entry,
    output: {
      filename: 'bundle.js',
      path: starpack.output.path,
    },
  },
)
