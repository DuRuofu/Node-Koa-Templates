//测试路由
import Router from 'koa-router';
const router = new Router({ prefix: '/v1/test' });
/**
 * @swagger
 * tags:
 *   name: 测试路由
 *   description: 用于测试最基本的路由功能
 */

/**
 * @swagger
 * /v1/test/post:
 *   post:
 *     summary: 测试post请求
 *     description: 测试post请求
 *     tags: [测试路由]
 *     responses:
 *       200:
 *         description: 这是一个测试路由,post请求正常!
 *
 */
router.post('/post', (ctx: any, next: any) => {
  console.log('测试路由:post');
  ctx.body = '这是一个测试路由,post请求正常!';
});

/**
 * @swagger
 * /v1/test/delete:
 *   delete:
 *     summary: 测试delete请求
 *     description: 测试delete请求
 *     tags: [测试路由]
 *     responses:
 *       200:
 *         description: 这是一个测试路由,delete请求正常!
 *
 */
router.delete('/delete', (ctx: any, next: any) => {
  console.log('测试路由:delete');
  ctx.body = '这是一个测试路由,delete请求正常!';
});

/**
 * @swagger
 * /v1/test/get:
 *   get:
 *     summary: 测试get请求
 *     description: 测试get请求
 *     tags: [测试路由]
 *     responses:
 *       200:
 *         description: 这是一个测试路由,get请求正常!
 *
 */
router.get('/get', (ctx: any, next: any) => {
  console.log('测试路由:get');
  ctx.body = '这是一个测试路由,get请求正常!';
});

/**
 * @swagger
 * /v1/test/put:
 *   put:
 *     summary: 测试put请求
 *     description: 测试put请求
 *     tags: [测试路由]
 *     responses:
 *       200:
 *         description: 这是一个测试路由,put请求正常!
 *
 */
router.put('/update', (ctx: any, next: any) => {
  console.log('测试路由:put');
  ctx.body = '这是一个测试路由,put请求正常!';
});

export default router;
