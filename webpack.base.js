
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  resolve: {
    extensions: ['.js'], // 使用的扩展名(import文件时候省略的后缀名)
  },
  module: {
    rules: [
      // {
      //   test: require.resolve('globals.js'),
      //   use: 'exports-loader?file,parse=helpers.parse',
      // }, // 将globals.js中的file,helpers.parse暴露出来，供全局使用，用法： import { file, parse } from './globals.js';
      {
        test: /\.js$/,
        exclude: /(node_modules)/, // 排除文件
        loader: 'babel-loader',
      },
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|ico|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[hash:8].[ext]',
              publicPath: './',
              limit: 5 * 1024,
            },
          },
        ],
      },
      {
        test: /\.(ogg|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[name].[hash:8].[ext]' },
          },
        ],
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'fonts/[name].[hash:8].[ext]' },
          },
        ],
      },
    ],
  },
  plugins: [
    // 全局变量
    new webpack.ProvidePlugin({
      _: 'lodash',
      moment: 'moment',
      // join: ['lodash', 'join'], // 指定需要的lodash中的方法，配合tree shaking将多余的lodash删除
    }),
  ],
};
