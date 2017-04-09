const path = require('path');

const resolve = path.resolve;

module.exports = {
  entry: {
    app: resolve('./src/index.js'),
  },

  output: {
    filename: 'bundle.js',
    path: './build',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
              'babel-preset-es2015',
              'babel-preset-stage-0',
            ],
          },
        },
      },
    ],
  },
};
