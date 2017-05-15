import path from 'path'

export default {
  base: path.resolve('./src'),
  entry: {
    main: require.resolve('./src/main'),
  },
  output: path.resolve('./public'),
  tests: require.resolve('./src/tests'),
  nodeModules: path.resolve('./node_modules'),
}
