// eslint-disable-next-line import/no-dynamic-require, global-require
const config = require(`${process.cwd()}/starpack.config`)

export default config.default ? config.default : config
