//organization路由模块

import Router from 'koa-router';
const router = new Router({ prefix: '/v1/organization' });
import Controllers from '../controllers/organization.controller';

//#region 添加组织
/**
 * @swagger
 * /organization/organizations:
 *   post:
 *     summary: 添加组织
 *     description: 添加组织
 *     tags: [组织管理模块]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 description: 组织名称
 *               Description:
 *                 description: 组织描述
 *               Level:
 *                 description: 组织等级
 *               LevelName:
 *                 description: 组织等级名称
 *               ParentId:
 *                 description: 上级组织id
 *             example:
 *               Name: "南方分部"
 *               Description: "无"
 *               Level: "1"
 *               LevelName: "二级"
 *               ParentId: "1"
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
 *                 example: 添加组织成功
 *                data:
 *                 type: object
 *                 description: 用户信息
 *                 example: {"OrganizationId": "3","Name": "南方分部","Description": "无","Level": 1,"LevelName": "二级","ParentId": "1","CreatedBy": "4e1bb3f5-8c0b-4573-8e6f-abf93bdc4224","CreatedTime": "2024-03-12T04:41:18.326Z"}
 *     security:
 *      - token: {}
 *      - server_auth:
 *        - authorization
 */
// #endregion
router.post('/organizations', Controllers.post);

//#region 删除组织
/**
 * @swagger
 * /organization/organizations:
 *   delete:
 *     summary: 删除组织
 *     description: 删除组织
 *     tags: [组织管理模块]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               OrganizationId:
 *                 description: 组织ID
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
 *                 example: 删除组织成功
 *                data:
 *                 type: object
 *                 description: 用户信息
 *                 example: {"OrganizationId": "2","Name": "南方分部","Description": "无","Level": 1,"LevelName": "二级","ParentId": "1","ISDisabled": false,"IsDeleted": true,"CreatedTime": "2024-03-12T04:39:39.869Z","UpdatedTime": "2024-03-12T04:49:45.146Z","CreatedBy": "4e1bb3f5-8c0b-4573-8e6f-abf93bdc4224","UpdatedBy": "4e1bb3f5-8c0b-4573-8e6f-abf93bdc4224"}

 *     security:
 *      - token: {}
 */
// #endregion
router.delete('/organizations', Controllers.delete);

//#region 获取全部组织列表
/**
 * @swagger
 * /organization/organizations:
 *   get:
 *     summary: 获取组织列表(树形数据)
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
router.get('/organizations', Controllers.getOrganizationTrees);

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
