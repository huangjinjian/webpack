const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 1加载
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 3提取
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),

    // 2 配置
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],

  mode: "development",

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3000,
    open: true
  }
};
