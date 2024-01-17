/**
 * @swagger
 * tags:
 *   name: 用户模块
 *   description: 用户管理模块
 */
import Router from 'koa-router';
const router = new Router({ prefix: '/v1/account' });
import Controllers from '../controllers/account.controller';

//#region 用户注册
/**
 * @swagger
 * /v1/account/register:
 *   post:
 *     summary: 用户注册
 *     description: 用户注册
 *     tags: [用户模块]
 *     produces:
 *     - application/json
 *     parameters: # 请求参数：
 *      - name: Account
 *        description: 账号
 *        in: formData
 *        required: true
 *      - name: Password
 *        description: 密码
 *        in: formData
 *        required: true
 *      - name: Email
 *        description: 邮箱
 *        in: formData
 *      - name: Phone
 *        description: 手机号
 *        in: formData
 *     responses:
 *       200:
 *         description: 用户注册成功
 *         schema:
 *          type: object
 *          properties:
 *           code:
 *             type: number
 *             description: 状态码
 *             example: 200
 *           massage:
 *             type: string
 *             description: 状态信息
 *             example: 用户注册成功
 *           data:
 *             type: object
 *             description: 用户信息
 */
// #endregion
router.post('/register', Controllers.register);

//#region 用户登陆
/**
 * @swagger
 * /v1/account/login:
 *   post:
 *     summary: 用户登陆
 *     description: 用户登陆
 *     tags: [用户模块]
 *     produces:
 *     - application/json
 *     parameters: # 请求参数：
 *      - name: Account
 *        description: 账号
 *        in: formData
 *        required: true
 *      - name: Password
 *        description: 密码
 *        in: formData
 *        required: true
 *     responses:
 *       200:
 *         description: 用登陆成功
 *         schema:
 *          type: object
 *          properties:
 *           code:
 *             type: number
 *             description: 状态码
 *             example: 200
 *           massage:
 *             type: string
 *             description: 登陆信息
 *             example: 用户登陆成功
 *           data:
 *             type: object
 *             description: 用户信息
 */
// #endregion
router.post('/login', Controllers.login);

// 删除用户

//#region 获取用户列表
/**
 * @swagger
 * /v1/account/getAllAccount:
 *   get:
 *     summary: 查询用户列表
 *     description: 查询用户列表
 *     tags: [用户模块]
 *     responses:
 *       200:
 *         description: 查询用户列表成功
 *         schema:
 *          type: object
 *          properties:
 *           code:
 *             type: number
 *             description: 状态码
 *             example: 200
 *           massage:
 *             type: string
 *             description: 查询信息
 *             example: 查询用户列表成功
 *           data:
 *             type: object
 *             description: 用户列表信息
 *     security:
 *      - token: {}
 *      - server_auth:
 *        - authorization
 */
// #endregion
router.get('/getAllAccount', Controllers.getAllAccount);

// 更新用户

export default router;
