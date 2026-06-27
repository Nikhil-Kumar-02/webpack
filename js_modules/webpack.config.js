const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: 'production',
  entry : './src/index.js',
  output : {
    path : path.resolve(__dirname,'build'),
    filename : 'bundle.js',
    clean: true
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
        use: [
          MiniCssExtractPlugin.loader, // replaces style-loader
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ]
};

module.exports = config;