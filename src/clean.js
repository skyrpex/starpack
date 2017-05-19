import del from 'del'
import starpackConfig from './user-config'

export default () => {
  del.sync([`${starpackConfig.output}/**/*`])
}
