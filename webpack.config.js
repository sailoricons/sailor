const path = require('path');

module.exports = {
  entry: ['core-js/es/array/from', path.resolve(__dirname, 'src/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'sailor',
    // Prevents webpack from referencing `window` in the UMD build
    // this will make module available for usage with node and browser at the same time
    globalObject: 'this',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
