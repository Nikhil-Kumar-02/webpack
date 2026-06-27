const path = require('path')

const config = {
  mode: 'production',
  entry : './src/index.js',
  output : {
    path : path.resolve(__dirname,'build'),
    filename : 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

module.exports = config;