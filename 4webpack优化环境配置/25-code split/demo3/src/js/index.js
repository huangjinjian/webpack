import "../css/style.css";
import "../css/reset.scss";

// import "@babel/polyfill";    全部兼容引入

import $ from "jquery";

console.log($);

const add = (a, b) => {
  console.log(a);
  return a + b;
};

import("./test")
  .then(({ del }) => {
    console.log(del);
  })
  .catch(() => {
    console.log(1123);
  });

// const delAccount = new Promise((res, rej) => {
//   console.log(1);
//   res();
//   rej();
// });

add(1, 23);
