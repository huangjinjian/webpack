const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

process.env.NODE_ENV = "production";

module.exports = {
  // 单入口文件
  entry: "./src/js/index.js",
  // 多入口文件
  // entry: {
  //   index: "./src/js/index.js"
  //   // util: "./src/js/util.js"
  // },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    // oneOf的作用就是 优化打包的构建速度
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        enforce: "pre",
        options: {
          fix: true
        }
      },
      {
        // 以下配置 不能有两个配置处理同一种类似文件
        oneOf: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [
              // 会增加时间 600ms  多的时候才需要多进程打包
              {
                loader: "thread-loader",
                options: {
                  workers: 2
                }
              },
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true,
                  presets: [
                    [
                      "@babel/preset-env",
                      {
                        //按需加载
                        useBuiltIns: "usage",
                        //指定core-js版本
                        corejs: {
                          version: 3
                        },
                        //指定兼容性做到那个版本
                        targets: {
                          chrome: "60",
                          firefox: "60",
                          ie: "9",
                          safari: "10",
                          edge: "17"
                        }
                      }
                    ]
                  ]
                }
              }
            ]
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  plugins: () => [require("postcss-preset-env")()]
                }
              }
            ]
          },
          {
            test: /\.less$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  plugins: () => [require("postcss-preset-env")()]
                }
              },
              "less-loader"
            ]
          },
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  plugins: () => [require("postcss-preset-env")()]
                }
              },
              "sass-loader"
            ]
          },
          {
            test: /\.(jpg|png|gif)$/,
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
              name: "[hash:8].[ext]",
              outputPath: "imgs",
              esModule: false // req
            }
          },
          {
            test: /\.html$/,
            loader: "html-loader"
          },
          {
            exclude: /\.(html|css|scss|js|jpg|png|gif)$/, //---------------这里要特别注意   scss  less 什么的要补充完整  不然的话就会匹配到 然后出错
            loader: "file-loader",
            options: {
              outputPath: "media"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:10].css"
    }),
    new OptimizeCssAssetsPlugin()
  ],

  mode: "production",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3000,
    open: true
  },

  // 多入口文件 同一个会打包成一个js  module
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
  // devtool: "source-map"
};
