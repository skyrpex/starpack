export default {
  presets: [
    require.resolve('babel-preset-env'),
    require.resolve('babel-preset-stage-2'),
  ],
  plugins: [
    require.resolve('babel-plugin-transform-runtime'),
    require.resolve('babel-plugin-transform-object-rest-spread'),
  ],
  env: {
    build: {
      presets: [
        [require.resolve('babel-preset-env'), { "modules": false }],
        require.resolve('babel-preset-stage-2'),
      ],
      plugins: [
        require.resolve('babel-plugin-lodash'),
      ],
    },
    test: {
      plugins: [
        require.resolve('babel-plugin-istanbul'),
      ],
    },
  },
}
