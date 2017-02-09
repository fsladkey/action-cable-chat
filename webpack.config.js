var path = require('path');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'frontend', 'entry.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        query: {
          presets: ['react', 'latest']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
