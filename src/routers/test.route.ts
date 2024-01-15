//测试路由
import Router from 'koa-router';
const router = new Router({ prefix: '/test' });

/**
 * @swagger
 * /v1/menu/list/${appId}:
 *   post:
 *     description: 获取菜单列表
 *     tags: [菜单模块]
 *     produces:
 *       - application/json
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "查询参数"
 *       schema:
 *         $ref: "#/definitions/Menu"
 *     responses:
 *       200:
 *         description: 获取成功
 *         schema:
 *           type: object
 *           properties:
 *             total:
 *               type: number
 *             rows:
 *               type: array
 *               items:
 *                   $ref: '#/definitions/MenuModel'
 *
 */
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
