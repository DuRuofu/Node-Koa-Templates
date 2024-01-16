//用户管理模块

import Router from 'koa-router';
const router = new Router({ prefix: '/v1/account' });
import Controllers from '../controllers/account.controller';

/**
 * @swagger
 * /v1/account/register:
 *   post:
 *     summary: 用户注册
 *     description: 用户注册
 *     tags: [用户模块]
 *     responses:
 *       200:
 *         description: 用户注册成功
 *
 */
router.post('/register', Controllers.register);

/**
 * @swagger
 * /v1/account/login:
 *   post:
 *     summary: 用户登陆
 *     description: 用户登陆
 *     tags: [用户模块]
 *     responses:
 *       200:
 *         description: 用户注册成功
 *
 */
router.post('/login', Controllers.login);

// 删除用户

// 查询用户

// 更新用户

export default router;
