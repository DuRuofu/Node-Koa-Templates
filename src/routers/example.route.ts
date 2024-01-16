//实例路由模块，该文件负责定义路由规则

import Router from 'koa-router';
const router = new Router({ prefix: '/v1/example' });
import Controllers from '../controllers/example.controller';

/**
 * @swagger
 * /v1/example/post:
 *   post:
 *     summary: 测试数据库插入
 *     description: 测试数据库插入
 *     tags: [数据库示例]
 *     responses:
 *       200:
 *         description:
 *
 */
router.post('/post', Controllers.post);

/**
 * @swagger
 * /v1/example/delete:
 *   delete:
 *     summary: 测试数据库删除
 *     description: 测试数据库删除
 *     tags: [数据库示例]
 *     responses:
 *       200:
 *         description:
 *
 */
router.delete('/delete', Controllers.delete);

/**
 * @swagger
 * /v1/example/get:
 *   get:
 *     summary: 测试数据库查询
 *     description: 测试数据库查询
 *     tags: [数据库示例]
 *     responses:
 *       200:
 *         description:
 *
 */
router.get('/get', Controllers.get);

/**
 * @swagger
 * /v1/example/put:
 *   put:
 *     summary: 测试数据库更新
 *     description: 测试数据库更新
 *     tags: [数据库示例]
 *     responses:
 *       200:
 *         description:
 *
 */
router.put('/update', Controllers.put);

export default router;
