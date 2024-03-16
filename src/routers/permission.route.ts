// 权限管理模块
/**
 * @swagger
 * tags:
 *   name: 权限管理
 *   description: 权限管理模块
 *   baseurl: /v1/permission
 */
import Router from 'koa-router';
const router = new Router({ prefix: '/v1/permission' });
import Controllers from '../controllers/permission.controller';

//#region 添加一条权限(通用)
/**
 * @swagger
 * /permission/permissions:
 *   post:
 *     summary: 添加一条权限
 *     description: 添加一条权限
 *     tags: [权限管理]
 *     security:
 *      - token: {}
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               OrganizationId:
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
 *               OrganizationId: "1"
 *               Account: "1234567"
 *               Password: "3.1415926"
 *               Email: "123344@11.c0m"
 *               Phone: "12912781727818"
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
 *                 example:
 */
// #endregion
router.post('/permissions', Controllers.Post);

//#region 按类型获取系统权限列表
/**
 * @swagger
 * /permission/permissions/{type}:
 *   get:
 *     summary: 获取系统权限列表
 *     description: 按类型获取权限列表【Type-->1:后端,2:前端】
 *     tags: [权限管理]
 *     security:
 *      - token: {}
 *     parameters: # 请求参数：
 *      - name: type
 *        description: 类型【Type-->1:后端,2:前端】
 *        in: path
 *        required: true
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
 *                 description: 信息
 *                 example: 获取权限成功
 *                data:
 *                 type: object
 *                 description: 权限信息
 *                 example:
 */
// #endregion
router.get('/permissions/:type', Controllers.Get);
export default router;
