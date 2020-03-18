const Koa = require("koa");
const app = new Koa();
const static = require("koa-static");

// app.use(async ctx => {
//   ctx.body = "Hello World";
// });

app.use(
  static(__dirname + "/build", {
    maxage: 60 * 60 * 1000 * 24
  })
);

app.listen(3100, () => {
  console.log(1);
});
