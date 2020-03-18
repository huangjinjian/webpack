import "../css/style.css";
import "../css/reset.scss";

console.log("suc");

// import "@babel/polyfill";    全部兼容引入

const add = (a, b) => {
  console.log(a);
  return a + b;
};

const delAccount = new Promise((res, rej) => {
  console.log(1);
  res();
  rej();
});

add(1, 23);
