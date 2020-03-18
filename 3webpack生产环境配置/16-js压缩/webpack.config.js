const path = require("path");

process.env.NODE_ENV = "development";

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "build")
  },

  /**
 *    js 压缩 只需要 mode: "production"
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
  mode: "production"
};
