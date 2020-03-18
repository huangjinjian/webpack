const path = require("path");

process.env.NODE_ENV = "development";

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "build")
  },

  /**
 *  js 兼容处理的方法
 *  1、基本js兼容性处理 npm install babel-loader @babel-core @babel-preset-env  -D   
      一定要配置 package.json
      "browserslist": {
        "development": [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version"
          "last 1 ie version"
        ]
      }

    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
 *   只能转换简单的简es6语法等 无法解析promise
    
    2、全部js兼容性处理 ==》 暴力引入 @babel/polyfill 在js入口文件引入即可
      缺点  需求只需要部分兼容 全部引入兼容性代码  体积过大

    3、按需加载  core-js
 */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": [
             [
              "@babel/preset-env",
              {
                //按需加载
                "useBuiltIns": "usage",
                //指定core-js版本
                "corejs": {
                  "version": 3
                },
                //指定兼容性做到那个版本
                "targets": {
                  "chrome": "60",
                  "firefox": "60",
                  "ie": "9",
                  "safari": "10",
                  "edge": "17"
                }
              }
             ]
            ]
          }
        }
      }
    ]
  },
  mode: "development"
};
