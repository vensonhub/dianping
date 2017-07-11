var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry:{
    index:path.resolve(__dirname, "./app/index.jsx")
  },
  output:{
    path:path.resolve(__dirname, "build"),
    filename:"[name].js"
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
          use:[
            {
               loader: 'style-loader'
            },
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
      },
      {
          test:/\.less/,
          exclude: /node_modules/,
          use:[
            {
               loader: 'style-loader'
            },
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
                  }),
                  // pxtorem({ rootValue: 16, propWhiteList: [] })
                ])
              }
            },
            {
              loader: 'less-loader'
            }
          ]
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
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,"app/index.html")
    }),
    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ],
  devServer: {
      proxy:{
        '/api':{
          target: 'http://localhost:3000',
          secure: false
        }
      },
      historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
      inline: true, //实时刷新
      hot: true  // 使用热加载插件 HotModuleReplacementPlugin
  }
}
