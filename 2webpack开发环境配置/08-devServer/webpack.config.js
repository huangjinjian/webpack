const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        exclude: /\.(html|css|js)$/,
        loader: "file-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],

  mode: "development",

  //一定要安装 npm i webpack-dev-server -D

  // 启动的命令  npx webpack-dev-server
  devServer: {
    // 项目构建后的路径
    contentBase: path.join(__dirname, "build"),

    // 启动gzip压缩
    compress: true,

    // 端口号
    port: 9000,

    //自动开浏览器
    open: true
  }
};
