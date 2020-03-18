const { resolve } = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/js/index.js",
    test: "./src/js/test2.js"
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "build")
  },

  plugins: [new HtmlWebpackPlugin()],

  mode: "development"
};
