import del from 'del'

export default () => {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const starpack = require(`${process.cwd()}/starpack.config`).default

  del.sync([`${starpack.output}/**/*`])
}
