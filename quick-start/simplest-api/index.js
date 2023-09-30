const Koa = require('koa');
const {koaBody} = require('koa-body');
const router = require('./router');

// 实例化一个 Koa 应用
const app = new Koa();

// 解析请求体
app.use(koaBody());
// 设置路由
app.use(router.routes());

// 监听错误事件
app.on('error', (error) => {
    console.error(error)
});

// 创建 HTTP 服务并监听端口
app.listen(3000, '0.0.0.0', () => {
    console.info('HTTP 服务启动成功')
});
