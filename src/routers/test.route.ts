//测试路由
import Router from 'koa-router';
const router = new Router({ prefix: '/test' });

// 增
router.post('/post', (ctx: any, next: any) => {
  console.log('测试路由:post');
  ctx.body = '这是一个测试路由,post请求正常!';
});

// 删
router.delete('/delete', (ctx: any, next: any) => {
  console.log('测试路由:delete');
  ctx.body = '这是一个测试路由,delete请求正常!';
});

// 查
router.get('/get', (ctx: any, next: any) => {
  console.log('测试路由:get');
  ctx.body = '这是一个测试路由,get请求正常!';
});

// 改
router.put('/update', (ctx: any, next: any) => {
  console.log('测试路由:put');
  ctx.body = '这是一个测试路由,put请求正常!';
});

export default router;
