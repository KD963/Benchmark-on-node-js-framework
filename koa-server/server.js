const Koa = require('koa')
const Router = require('koa-router');

const app = new Koa()
const router = Router();
// app.use(async function (ctx) {
//   ctx.body = { hello: 'koa world' }
// })

router.get('/add', ctx => {
  let result = 0;
  for (let i = 0; i < 5; i++) {
    result += i;
  }
  ctx.body = { result }
})




// app.use(async function (ctx) {
//   let result = 0;
//   for (let i = 0; i < 5; i++) {
//     result += i;
//   }
//   ctx.body = { result }
// })

router.get('/balancedarray', ctx => {
  let n = 8;

  n /= 2;
  if (n & 1) {
    ctx.body = "NO";

  }

  let a;
  let arr = [];
  for (let i = 1; i <= n; ++i) {
    a = i * 2;
    arr.push(a);

  }
  let b;
  let arrb = [];
  for (let i = 1; i < n; ++i) {
    b = i * 2 - 1;
    arrb.push(b);

  }
  let c = 3 * n - 1;
  let arrc = [];
  arrc.push(c);
  let result = [arr, arrb, arrc];
  ctx.body = result;


})

// app.use(async function(ctx) {
//   let i;
//   let arr = [];
//   for (i = 0; i < 20; i++) {
//     switch (i) {
//       case 0:
//         i += 5;
//       case 1:
//         i += 2;
//       case 5:
//         i += 5;
//       default:
//         i += 4;
//         break;
//     }
//     arr.push(i);
//   }
//   ctx.body = arr;
//   return 0;
// })

app.use(router.routes()).use(router.allowedMethods())
app.listen(3004)