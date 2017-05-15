import del from 'del'
import program from 'commander'
import makeConfig from '../config/webpack/hot'
import clean from '../clean'

program.command(
  'clean',
).description(
  'clean the output folder',
).action(() => {
  clean()
})
