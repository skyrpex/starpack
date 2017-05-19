import merge from 'webpack-merge'
import starpack from '../../user-config'

export default (config) => merge(config, starpack.webpack || {})
