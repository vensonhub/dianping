var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:{
    index:path.resolve(__dirname, "./app/index.jsx"),
    vendor:Object.keys(pkg.dependencies)
  },
  output:{
    path:path.resolve(__dirname, "build"),
    filename:"./js/[name].[chunkhash:8].js"
  },
  resolve: {
      extensions: ['.js','.jsx']
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
          test:/\.css$/,
          exclude: /node_modules/,
          loader:ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use:[
              {
                loader: 'css-loader'
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins:()=>([
                    autoprefixer({
                      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
                    })
                  ])
                }
              }
            ]
          })
      },
      {
          test:/\.less/,
          exclude: /node_modules/,
          loader:ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use:[
              {
                loader: 'css-loader'
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins:()=>([
                    autoprefixer({
                      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
                    })
                  ])
                }
              },
              {
                loader: 'less-loader'
              }
            ]
          })
      },
      {
          test:/\.(png|gif|jpg|jpeg|bmp)$/i,
          exclude: /node_modules/,
          loader:"url-loader?limit=5000"
      },
      {
          test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i,
          exclude: /node_modules/,
          loader:"url-loader?limit=5000"
      }
    ]
  },
  plugins:[
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright by vensonhub@github.com"),
    // html 模板插件
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,"app/index.html")
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),

    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          //supresses warnings, usually from module minification
          warnings: false
        }
    }),

    // 分离CSS和JS文件
    new ExtractTextPlugin('./css/[name].[chunkhash:8].css'),

    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: './js/[name].[chunkhash:8].js'
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })

  ]
}
