const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const theme = require('./theme.json');
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname),       　　　　　　　　　　//根目录
    }),
    new HtmlWebpackPlugin({
      title: 'webpack-emmmmm',
      inject: true,
      template: "src/index.html",
      minify: {
        collapseWhitespace: true,
        hash: true,
      },
    }),
    new ExtractTextWebpackPlugin({
      filename: 'css/[name].[hash].css', //放到dist/css/下
      publicPath: './images',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // 转换文件的匹配正则
        exclude: /(node_modules)/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 less-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'postcss-loader', {
            loader: "less-loader",
            options: {
              modifyVars: theme,
              javascriptEnabled: true,
            },
          } // 更改less变量
          ]
        })
      },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {// node_modules内的依赖库
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          minChunks: 1, // 被不同entry引用次数(import),1次的话没必要提取
          maxInitialRequests: 5,
          minSize: 0,
          priority: 100,
          // enforce: true?
        },
        common: {
          chunks: "all",
          name: "common", // 生成文件名，依据output规则
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 1
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
          priority: 3,
        },
      }
    },
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
});