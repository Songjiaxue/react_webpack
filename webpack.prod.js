const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const webpack = require('webpack');
const flexbugs = require("postcss-flexbugs-fixes");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const browerVision = ["last 6 versions", "android >= 4.0", "ios >= 5.0", ">1%", "Firefox ESR", "not ie < 9"];
const path = require('path');
const theme = require('./theme.json');
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist'],{
      root: path.resolve(__dirname),       　　　　　　　　　　//根目录
  }),
    new HtmlWebpackPlugin({
      title: 'webpack-emmmmm',
      minify: {
        collapseWhitespace: true, 
        hash: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                flexbugs,
                autoprefixer({
                  browsers: browerVision
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        include: path.resolve("./node_modules"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                flexbugs,
                autoprefixer({
                  browsers: browerVision
                })
              ]
            }
          },
          {
            loader: "less-loader",
            options: {
              modifyVars: theme
            }
          },
        ]
      },
      {
        test: /\.less$/,
        include: path.resolve("./src"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                flexbugs,
                autoprefixer({
                  browsers: browerVision
                })
              ]
            }
          },
          {
            loader: "less-loader",
          }
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor:{// node_modules内的依赖库
            chunks:"all",
            test: /[\\/]node_modules[\\/]/,
            name:"vendor",
            minChunks: 1, // 被不同entry引用次数(import),1次的话没必要提取
            maxInitialRequests: 5,
            minSize: 0,
            priority:100,
            // enforce: true?
        },
        common: {
            chunks:"all",
            name: "common", // 生成文件名，依据output规则
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority:1
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
    filename: '[name].[hash].js',
    path: path.resolve(__dirname,'dist')
  },
});