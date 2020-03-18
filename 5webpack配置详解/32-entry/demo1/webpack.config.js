const { resolve } = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "build")
  },

  plugins: [new HtmlWebpackPlugin()],

  mode: "development"
};
