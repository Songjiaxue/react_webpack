const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const theme = require('./theme.json');
const { proxy } = require('./config/proxy');

// 多进程编译
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });


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
        include: path.resolve(__dirname, 'src'),
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.css/,
        use: 'happypack/loader?id=css'
      },
      {
        test: /\.less$/,
        // include: path.resolve(__dirname, 'src'),
        use: 'happypack/loader?id=less'
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      inject: true
    }),
    new HappyPack({
      id: 'css',
      threadPool: happyThreadPool,
      loaders: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ],
    }),
    new HappyPack({
      id: 'less',
      threadPool: happyThreadPool,
      loaders: [
        'style-loader', 
        'css-loader',
        'postcss-loader',
        {
          loader: "less-loader",
          options: {
            modifyVars: theme,
            javascriptEnabled: true,
          },
        } // 更改less变量
      ]
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});