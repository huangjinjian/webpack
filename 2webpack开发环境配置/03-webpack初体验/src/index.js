/**
 *
 *webpack ./src/index.js -o ./build/built.js --mode="development"
  webpack 会以 ./src/index.js 为入口文件  然后输出到 ./build/built.js 整体打包环境  是开发环境


  webpack ./src/index.js -o ./build/built.js --mode="production"
  webpack 会以 ./src/index.js 为入口文件  然后输出到 ./build/built.js 整体打包环境  是生产环境
 */

import data from "./data.json";

// import  './style.css';  解析不了

// 结论;
// webpack能处理js、json资源，不能处理css、img等其他资源
// 生产环境和开发环境 能将es6模块化编译成浏览器能识别的模块化
// 生产环境比开发环境多了一个压缩js代码

function add(a, b) {
  console.log(a + b);
  console.log(data);
  return a + b;
}

add(3, 6);
