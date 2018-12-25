const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const theme = require('./theme.json');
const { proxy } = require('./config/proxy');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    proxy,
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    // host: '192.168.1.36',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: /src/,
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.js$/,
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
        use: ['style-loader','css-loader','postcss-loader'],
      },
      {//antd样式处理
        test: /\.css$/,
        exclude: /src/,
        use: [
          { loader: "style-loader", },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader','css-loader','postcss-loader',
          {
            loader: "less-loader",
            options: {
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