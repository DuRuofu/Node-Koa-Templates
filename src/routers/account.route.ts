/**
 * @swagger
 * tags:
 *   name: 用户模块
 *   d8escription: 用户管理模块
 */
import Router from 'koa-router';
const router = new Router({ prefix: '/v1/account' });
import Controller from '../controllers/account.controller';

//#region 用户注册
/**
 * @swagger
 * /account/register:
 *   post:
 *     summary: 用户注册
 *     description: 用户注册(待完善)
 *     tags: [用户模块]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TeamId:
 *                 description: 团队id
 *               Account:
 *                 description: 用户账号
 *               Password:
 *                 description: 用户密码
 *               Email:
 *                 description: 用户邮箱
 *               Phone:
 *                 description: 用户手机号
 *             example:
 *               TeamId: "1"
 *               Account: "11"
 *               Password: "11"
 *               Email: "1"
 *               Phone: "1"
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                code:
 *                 type: number
 *                 description: 状态码
 *                 example: 200
 *                massage:
 *                 type: string
 *                 description: 注册信息
 *                 example: 用户注册成功
 *                data:
 *                 type: object
 *                 description: 用户信息
 *                 example: {"AccountId": "61a7125d-9439-4739-90f1-c4271a84d9d6","TeamId": "126626262","Account": "2626211","Password": "1126262","Name": "2626211","AvatarUrl": "https://image-1308319148.cos.ap-chengdu.myqcloud.com/main/%E4%B8%AA%E4%BA%BA%E5%A4%B4%E5%83%8F.png","Email": "146746747647","Phone": "1363636363","IsDeleted": false,"CreatedTime": "2024-03-11T10:21:53.823Z","UpdatedTime": "2024-03-11T10:21:53.823Z"}
 */
// #endregion
router.post('/register', Controller.register);

//#region 用户登陆
/**
 * @swagger
 * /account/login:
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
 *                 description: 用户账号
 *               Password:
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
 *                code:
 *                 type: number
 *                 description: 状态码
 *                 example: 200
 *                massage:
 *                 type: string
 *                 description: 登陆信息
 *                 example: 用户登陆成功
 *                data:
 *                 type: object
 *                 description: 用户信息
 *                 example: {"token": "Bearer eyJhbGciOiJIUzIFJ354bxO7Dw"}
 */
// #endregion
router.post('/login', Controller.login);

//#region 删除用户
/**
 * @swagger
 * /account/accounts:
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
 */
// #endregion
router.delete('/accounts', Controller.deleteAccount);

//#region 获取用户列表(不分页)
/**
 * @swagger
 * /account/accounts:
 *   get:
 *     summary: 获取全部用户列表(不分页)
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
router.get('/accounts', Controller.getAllAccountList);

//#region 获取用户列表(分页)
/**
 * @swagger
 * /account/accounts/{page}/{limit}:
 *   get:
 *     summary: 获取用户列表(分页)
 *     description: 查询用户列表
 *     tags: [用户模块]
 *     parameters: # 请求参数：
 *      - name: page
 *        description: 当前页数
 *        in: path
 *        type: number
 *        required: true
 *      - name: limit
 *        description: 每页记录数
 *        in: path
 *        type: number
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
router.get('/accounts/:page/:limit', Controller.getAllAccount);

//#region 获取某用户信息
/**
 * @swagger
 * /account/accounts/{id}:
 *   get:
 *     summary: 查询单个用户信息
 *     description: 查询单个用户信息
 *     tags: [用户模块]
 *     security:
 *      - token: {}
 *     parameters: # 请求参数：
 *      - name: Id
 *        description: 用户id
 *        in: path
 *        required: true
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
 */
// #endregion
router.get('/accounts/:id', Controller.getAccount);

//#region 更新用户信息
/**
 * @swagger
 * /account/accounts/{id}:
 *   put:
 *     summary: 更新用户信息 (待开发)
 *     description: 更新用户信息
 *     tags: [用户模块]
 *
 */
// #endregion
router.put('/accounts/:id');

//#region 修改用户密码
/**
 * @swagger
 * /account/accounts/{id}:
 *   patch:
 *     summary: 修改用户密码 (待开发)
 *     description: 修改用户密码
 *     tags: [用户模块]
 *
 */
// #endregion
router.patch('/accounts/:id');
export default router;

//Reference:
//https://blog.csdn.net/qq_40188459/article/details/113772660
//https://blog.csdn.net/qq_38734862/article/details/107715579
