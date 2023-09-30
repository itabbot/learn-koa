const Koa = require('koa')
const app = new Koa();

app.use(async (ctx, next) => {
    console.log("--> 1");
    next();
    console.log("<-- 1");
});
app.use(async (ctx, next) => {
    console.log("--> 2");
    next();
    console.log("<-- 2");
});
app.use(async () => {
    console.log("--> 3");
    console.log("<-- 3");
});
app.use(async () => {
    console.log("--> 4");
    console.log("<-- 4");
});

app.listen(3000, '0.0.0.0', () => {
    console.info('HTTP 服务启动成功')
});
