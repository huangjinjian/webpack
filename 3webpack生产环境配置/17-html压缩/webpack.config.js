const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "build")
  },

  /**
 *   html 压缩 只需要配置 npm install html-webpack-plugin --save-dev 即可
    new HtmlWebpackPlugin({
      minify:{
        折叠有助于文档树中文本节点的空白
        collapseWhitespace: true,
        删除HTML注释
        removeComments
      }
    })

    更多配置 看  github 
    DanielRuf/html-minifier-terser



 */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: "production"
};
