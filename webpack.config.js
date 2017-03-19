module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'js/build/bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
