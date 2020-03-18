import "./index.css";
import "./style.scss";

import test from "./test";
test();

console.log("1");

if (module.hot) {
  module.hot.accept("./test.js", function() {
    test();
  });
}
