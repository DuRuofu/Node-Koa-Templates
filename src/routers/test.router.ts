//实例路由模块，该文件负责定义路由规则
import Router from 'koa-router';
const router = new Router({ prefix: '/test' });

// 增
router.get('/post', (ctx: any, next: any) => {
  console.log('post');
  ctx.body = 'post';
});

// 删
router.get('/delete', (ctx: any, next: any) => {
  console.log('delete');
  ctx.body = 'delete';
});

// 查
router.get('/get', (ctx: any, next: any) => {
  console.log('get');
  ctx.body = 'get';
});

// 改
router.get('/update', (ctx: any, next: any) => {
  console.log('update');
  ctx.body = 'update';
});

export default router;
