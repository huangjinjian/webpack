import $ from "jquery";

import "./index.less";

$("#title").click(() => {
  alert("show");
});

// 无效
// 因为浏览器  不能识别 less 等 静态资源解析
