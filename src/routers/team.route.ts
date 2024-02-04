//team路由模块

import Router from 'koa-router';
const router = new Router({ prefix: '/v1/team' });
import Controllers from '../controllers/team.controller';

/**
 * @swagger
 * /v1/team/post:
 *   post:
 *     summary: team
 *     description: team
 *     tags: [team]
 *     produces:
 *     - application/json
 *     parameters: # 请求参数：
 *      - name: Name
 *        description: 名称
 *        in: formData
 *        required: true
 *     responses:
 *       200:
 *         description:
 *
 */
router.post('/post', Controllers.post);

/**
 * @swagger
 * /v1/team/delete:
 *   delete:
 *     summary: team
 *     description: team
 *     tags: [team]
 *     produces:
 *     - application/json
 *     parameters: # 请求参数：
 *      - name: teamId
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
 * /v1/team/get:
 *   get:
 *     summary: team
 *     description: team
 *     tags: [team]
 *     responses:
 *       200:
 *         description:
 *
 */
router.get('/get', Controllers.get);

/**
 * @swagger
 * /v1/team/put:
 *   put:
 *     summary: team
 *     description: team
 *     tags: [team]
 *     produces:
 *     - application/json
 *     parameters: # 请求参数：
 *      - name: teamId
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
