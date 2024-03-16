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

//#region 添加一条权限
/**
 * @swagger
 * /permission/permissions:
 *   post:
 *     summary: 添加一条权限
 *     description: 添加一条权限
 *     tags: [权限管理]
 *
 */
// #endregion
router.post('/permissions', Controllers.Post);

//#region 删除一条权限
/**
 * @swagger
 * /permission/deletePermission:
 *   delete:
 *     summary: 删除一条权限 (待开发)
 *     description: 删除一条权限
 *     tags: [权限管理]
 *
 */
// #endregion
router.delete('/permissions/:id');

export default router;
