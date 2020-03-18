const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  //  即使在模块中使用了 jq模块 但是还不是打包jq模块  要通过cmd 引入
  externals: {
    jquery: "jQuery"
  },

  mode: "development"
};
