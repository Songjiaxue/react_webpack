const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const flexbugs = require("postcss-flexbugs-fixes");
const autoprefixer = require("autoprefixer");
const theme = require('./theme.json');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname,"dist"),
    hot: true,
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: /src/,
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: require.resolve('babel-loader'),
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
      },
      {
        test: /\.css/,
        exclude: /(node_modules)/,
        use: [
          {
            loader:"style-loader"
          },
          {
            loader:"css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                flexbugs,
                autoprefixer({
                  browsers: ["last 6 versions", "android >= 4.0", "ios >= 5.0", ">1%", "Firefox ESR", "not ie < 9"]
                })
              ]
            }
          }
        ]
      },
      {//antd样式处理
        test:/\.css$/,
        exclude:/src/,
        use:[
            { loader: "style-loader",},
            {
                loader: "css-loader",
                options:{
                    importLoaders:1
                }
            }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader:"style-loader"
          },
          {
            loader:"css-loader",
          },
          
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                flexbugs,
                autoprefixer({
                  browsers: ["last 6 versions", "android >= 4.0", "ios >= 5.0", ">1%", "Firefox ESR", "not ie < 9"]
                })
              ]
            }
          },
          {
            loader:"less-loader",
            options:{
              modifyVars: theme,
              javascriptEnabled: true,
            },
          } // 更改less变量
        ]
      },
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});