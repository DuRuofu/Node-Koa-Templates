// 权限管理模块
/**
 * @swagger
 * tags:
 *   name: 权限管理
 *   description: 权限管理模块
 */
import Router from 'koa-router';
const router = new Router({ prefix: '/v1/permission' });

//#region 添加一条权限
/**
 * @swagger
 * /v1/permission/addPermission:
 *   post:
 *     summary: 添加一条权限 (待开发)
 *     description: 添加一条权限
 *     tags: [权限管理]
 *
 */
// #endregion
router.post('/addPermission');

//#region 删除一条权限
/**
 * @swagger
 * /v1/permission/deletePermission:
 *   delete:
 *     summary: 删除一条权限 (待开发)
 *     description: 删除一条权限
 *     tags: [权限管理]
 *
 */
// #endregion
router.post('/addPermission');

//#region 查询单个权限
/**
 * @swagger
 * /v1/permission/getPermission:
 *   get:
 *     summary: 查询单个权限 (待开发)
 *     description: 查询单个权限
 *     tags: [权限管理]
 *
 */
// #endregion

//#region 查询所有权限
/**
 * @swagger
 * /v1/permission/getAllPermission:
 *   get:
 *     summary: 查询所有权限 (待开发)
 *     description: 查询所有权限
 *     tags: [权限管理]
 *
 */
// #endregion

//#region 更新一条权限
/**
 * @swagger
 * /v1/permission/pudataPermission:
 *   post:
 *     summary: 更新一条权限 (待开发)
 *     description: 更新一条权限
 *     tags: [权限管理]
 *
 */
// #endregion

//#region 为角色添加权限
/**
 * @swagger
 * /v1/permission/addPermissionForRole:
 *   post:
 *     summary: 为角色添加权限 (待开发)
 *     description: 为角色添加权限
 *     tags: [权限管理]
 *
 */
// #endregion

//#region 删除角色的权限
/**
 * @swagger
 * /v1/permission/deletePermissionForRole:
 *   delete:
 *     summary: 删除角色的权限 (待开发)
 *     description: 删除角色的权限
 *     tags: [权限管理]
 *
 */
// #endregion

//#region 查询角色的权限
/**
 * @swagger
 * /v1/permission/getPermissionForRole:
 *   get:
 *     summary: 查询角色的权限 (待开发)
 *     description: 查询角色的权限
 *     tags: [权限管理]
 *
 */
// #endregion

export default router;
