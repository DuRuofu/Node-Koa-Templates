//organization路由模块

import Router from 'koa-router';
const router = new Router({ prefix: '/v1/organization' });
import Controllers from '../controllers/organization.controller';

/**
 * @swagger
 * /v1/organization/post:
 *   post:
 *     summary: 添加组织
 *     description: 添加组织
 *     tags: [organization]
 *     produces:
 *     - application/json
 *     parameters: # 请求参数：
 *      - name: Name
 *        description: 组织名称
 *        in: formData
 *        required: true
 *      - name: Name
 *        Description: 组织描述
 *        in: formData
 *     responses:
 *       200:
 *         description:
 *     security:
 *      - token: {}
 *      - server_auth:
 *        - authorization
 */
router.post('/post', Controllers.post);

/**
 * @swagger
 * /v1/organization/delete:
 *   delete:
 *     summary: organization
 *     description: organization
 *     tags: [organization]
 *     produces:
 *     - application/json
 *     parameters: # 请求参数：
 *      - name: organizationId
 *        description: 测试id
 *        in: formData
 *        required: true
 *     responses:
 *       200:
 *         description:
 *
 */
router.delete('/delete', Controllers.delete);

/**
 * @swagger
 * /v1/organization/get:
 *   get:
 *     summary: organization
 *     description: organization
 *     tags: [organization]
 *     responses:
 *       200:
 *         description:
 *
 */
router.get('/get', Controllers.get);

/**
 * @swagger
 * /v1/organization/put:
 *   put:
 *     summary: organization
 *     description: organization
 *     tags: [organization]
 *     produces:
 *     - application/json
 *     parameters: # 请求参数：
 *      - name: organizationId
 *        description: 测试id
 *        in: formData
 *        required: true
 *     responses:
 *       200:
 *         description:
 *
 */
router.put('/put', Controllers.put);

export default router;
