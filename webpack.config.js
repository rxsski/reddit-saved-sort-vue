module.exports = {
  entry: './src/main.js',
  output: {
    path: './build',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },
  vue: {
    loaders: {
      js: 'babel',
    },
  },
}