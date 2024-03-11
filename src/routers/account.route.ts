/**
 * @swagger
 * tags:
 *   name: 用户模块
 *   description: 用户管理模块
 */
import Router from 'koa-router';
const router = new Router({ prefix: '/v1/account' });
import Controller from '../controllers/account.controller';

//#region 用户注册
/**
 * @swagger
 * /v1/account/register:
 *   post:
 *     summary: 用户注册
 *     description: 用户注册(待完善)
 *     tags: [用户模块]
 *     produces:
 *     - application/json
 *     parameters: # 请求参数：
 *      - name: TeamId
 *        description: 团队id
 *        in: formData
 *        datatype: integer
 *        required: true
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
router.post('/register', Controller.register);

// //#region 用户登陆
// /**
//  * @swagger
//  * /v1/account/login:
//  *   post:
//  *     summary: 用户登陆
//  *     description: 用户登陆
//  *     tags: [用户模块]
//  *     produces:
//  *     - application/json
//  *     parameters: # 请求参数：
//  *      - name: Account
//  *        description: 账号
//  *        in: formData
//  *        required: true
//  *      - name: Password
//  *        description: 密码
//  *        in: formData
//  *        required: true
//  *     responses:
//  *       200:
//  *         description: 用登陆成功
//  *         schema:
//  *          type: object
//  *          properties:
//  *           code:
//  *             type: number
//  *             description: 状态码
//  *             example: 200
//  *           massage:
//  *             type: string
//  *             description: 登陆信息
//  *             example: 用户登陆成功
//  *           data:
//  *             type: object
//  *             description: 用户信息
//  */
// // #endregion

//#region 用户登陆
/**
 * @swagger
 * /v1/account/login:
 *   post:
 *     summary: 用户登陆
 *     description: 用户登陆
 *     tags: [用户模块]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Account:
 *                 type: string
 *                 description: 用户账号
 *               Password:
 *                 type: string
 *                 description: 用户密码
 *             example:
 *               Account: "11"
 *               Password: "11"
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 tokens:
 *                   $ref: '#/components/schemas/AuthTokens'
 *       "401":
 *         description: Invalid email or password
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 401
 *               message: Invalid email or password
 */
// #endregion
router.post('/login', Controller.login);

//#region 删除用户
/**
 * @swagger
 * /v1/account/deleteAccount:
 *   delete:
 *     summary: 删除某个用户 (待开发)
 *     description: 删除某个用户
 *     tags: [用户模块]
 *     responses:
 *       200:
 *         description: 删除某个用户成功
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
 *             example: 删除某个用户成功
 *           data:
 *             type: object
 *             description: 用户信息
 *     security:
 *      - token: {}
 *      - server_auth:
 *        - authorization
 */
// #endregion
router.delete('/deleteAccount', Controller.deleteAccount);

//#region 获取用户列表(不分页)
/**
 * @swagger
 * /v1/account/getAllAccountList:
 *   get:
 *     summary: 获取用户列表(不分页)
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
router.get('/getAllAccountList', Controller.getAllAccountList);

//#region 获取用户列表(分页)
/**
 * @swagger
 * /v1/account/getAllAccount:
 *   get:
 *     summary: 获取用户列表(分页)
 *     description: 查询用户列表
 *     tags: [用户模块]
 *     produces:
 *     - application/x-www-form-urlencoded
 *     parameters: # 请求参数：
 *      - name: Page
 *        description: 当前页数
 *        in: query
 *        type: string
 *        required: true
 *      - name: Iimit
 *        description: 每页记录数
 *        in: query
 *        type: string
 *        required: true
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
router.get('/getAllAccount', Controller.getAllAccount);

//#region 获取单个用户信息
/**
 * @swagger
 * /v1/account/getAccount:
 *   get:
 *     summary: 查询单个用户
 *     description: 查询单个用户信息
 *     tags: [用户模块]
 *     responses:
 *       200:
 *         description: 查询用户信息成功
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
 *             example: 查询用户信息成功
 *           data:
 *             type: object
 *             description: 用户信息
 *     security:
 *      - token: {}
 *      - server_auth:
 *        - authorization
 */
// #endregion
router.get('/getAccount', Controller.getAccount);

//#region 更新用户信息
/**
 * @swagger
 * /v1/account/uploadAvatar:
 *   post:
 *     summary: 更新用户信息 (待开发)
 *     description: 更新用户信息
 *     tags: [用户模块]
 *
 */
// #endregion
router.post('/uploadAvatar');

//#region 修改用户密码
/**
 * @swagger
 * /v1/account/updataPassword:
 *   post:
 *     summary: 修改用户密码 (待开发)
 *     description: 修改用户密码
 *     tags: [用户模块]
 *
 */
// #endregion
router.post('/updataPassword');
export default router;

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             example:
 *               email: fake@example.com
 *               password: password1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 tokens:
 *                   $ref: '#/components/schemas/AuthTokens'
 *       "401":
 *         description: Invalid email or password
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 401
 *               message: Invalid email or password
 */
