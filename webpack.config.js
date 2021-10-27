const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  devtool: false,
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public'),
  },
};
