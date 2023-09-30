const Router = require('@koa/router');

// 实例化路由器
const router = new Router();

// 测试接口
router.get('/test', async (ctx) => {
    ctx.body = {
        now: Date.now(),
        query: ctx.query,
    };
    ctx.status = 200;
    ctx.set({'X-TEST-HEADER': 'TEST'});
});

module.exports = router
