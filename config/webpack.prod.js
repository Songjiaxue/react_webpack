const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Webpackbar = require('webpackbar');
const path = require('path');
const theme = require('../theme.json');

// 多进程编译
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve('./'),       　　　　　　　　　　//根目录
    }), // 打包之前clean dist文件夹
    new Webpackbar(),
    new HtmlWebpackPlugin({
      title: 'react-test',
      inject: true, // 向template或者templateContent中注入所有静态资源，true或者body：所有JavaScript资源插入到body元素的底部。
      template: "src/index.html",
      minify: {
        collapseWhitespace: true, // 清理html中的空格、换行符。
        minifyCSS: true, // 压缩html内的样式。
        minifyJS: true, // 压缩html内的js。
      },
      chunksSortMode: 'none' //如果使用webpack4将该配置项设置为'none'
    }), // 渲染html模板
    new HappyPack({
      id: 'css',
      threadPool: happyThreadPool,
      loaders: [
        'css-loader',
        'postcss-loader',
      ],
    }),
    new HappyPack({
      id: 'less',
      threadPool: happyThreadPool,
      loaders: [
        'css-loader',
        'postcss-loader',
        {
          loader: "less-loader",
          options: {
            modifyVars: theme, // antd less变量
            javascriptEnabled: true,
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css', //放到dist/css/下
      chunkFilename: 'css/[name].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // 转换文件的匹配正则
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader, // style-loader与mini-css-extract-plugin冲突，要去掉
          'happypack/loader?id=css',
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader, // style-loader与mini-css-extract-plugin冲突，要去掉
          'happypack/loader?id=less',
        ],
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
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            unused: true,
            dead_code: true,
            warnings: false
          }
        },
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve('dist'),
  },
});