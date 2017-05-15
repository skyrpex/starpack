export default ({ starpack }) => [
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
        starpack.base,
        starpack.nodeModules,
      ],
    },
  },
]
