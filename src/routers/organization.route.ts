//organization路由模块

import Router from 'koa-router';
const router = new Router({ prefix: '/v1/organization' });
import Controllers from '../controllers/organization.controller';

//#region 添加组织
/**
 * @swagger
 * /v1/organization/post:
 *   post:
 *     summary: 添加组织
 *     description: 添加组织
 *     tags: [组织管理模块]
 *     produces:
 *     - application/json
 *     parameters: # 请求参数：
 *      - name: Name
 *        description: 组织名称
 *        in: formData
 *        required: true
 *      - name: Description
 *        description: 组织描述
 *        in: formData
 *        required: true
 *     responses:
 *       200:
 *         description: 添加成功
 *         schema:
 *          type: object
 *          properties:
 *           code:
 *             type: number
 *             description: 状态码
 *             example: 200
 *           massage:
 *             type: string
 *             description: 信息
 *           data:
 *             type: object
 *             description: 数据
 *     security:
 *      - token: {}
 *      - server_auth:
 *        - authorization
 */
// #endregion
router.post('/post', Controllers.post);

//#region 添加组织
/**
 * @swagger
 * /v1/organization/delete:
 *   delete:
 *     summary: 删除组织
 *     description: 删除组织
 *     tags: [组织管理模块]
 *     produces:
 *     - application/json
 *     parameters: # 请求参数：
 *      - name: OrganizationId
 *        description: 组织名称
 *        in: formData
 *        required: true
 *     responses:
 *       200:
 *         description: 删除成功
 *         schema:
 *          type: object
 *          properties:
 *           code:
 *             type: number
 *             description: 状态码
 *             example: 200
 *           massage:
 *             type: string
 *             description: 信息
 *           data:
 *             type: object
 *             description: 数据
 *     security:
 *      - token: {}
 *      - server_auth:
 *        - authorization
 */
// #endregion
router.delete('/delete', Controllers.delete);

//#region 获取用户列表(不分页)
/**
 * @swagger
 * /v1/organization/getAllAccountList:
 *   get:
 *     summary: 获取组织列表(不分页)
 *     description: 获取组织列表
 *     tags: [组织管理模块]
 *     responses:
 *       200:
 *         description: 查询组织列表成功
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
router.get('/getAllOrganizationList', Controllers.getAllOrganizationList);

//#region 获取用户列表(分页)
/**
 * @swagger
 * /v1/organization/getOrganizationList:
 *   get:
 *     summary: 获取组织列表(分页)
 *     description: 获取组织列表
 *     tags: [组织管理模块]
 *     produces:
 *     - application/x-www-form-urlencoded
 *     parameters: # 请求参数：
 *      - name: Page
 *        description: 当前页数
 *        in: query
 *        type: string
 *        required: true
 *      - name: PageSize
 *        description: 每页记录数
 *        in: query
 *        type: string
 *        required: true
 *     responses:
 *       200:
 *         description: 查询组织列表成功
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
router.get('/getOrganizationList', Controllers.getOrganizationList);

export default router;
