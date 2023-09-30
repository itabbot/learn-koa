const Koa = require('koa');
const views = require('koa-views');
const koaStatic = require('koa-static');
const path = require('path');

// 实例化一个 Koa 应用
const app = new Koa();

// 设置静态目录
app.use(koaStatic('public'));
// 设置模板引擎
app.use(views(path.join(__dirname, 'views'), {
    extension: 'ejs' // 使用ejs作为模板引擎
}));

// 处理请求的中间件
app.use(async (ctx) => {
    // 渲染页面
    await ctx.render('index', {msg: '你好 Koa'});
});

// 启动服务器
app.listen(3000, () => {
    console.log('服务器已启动');
});
