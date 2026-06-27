const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: 'development',
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
      },
      { 
        test: /\.(png|jpe?g|gif|svg|webp|jfif)$/i, 
        type: "asset", 
        parser: { 
          dataUrlCondition: 
          { 
            maxSize: 10 * 1024 // 8 KB 
          } 
        } 
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