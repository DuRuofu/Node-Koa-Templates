import Controller from '../controllers/role.controller';
// 角色管理模块
/**
 * @swagger
 * tags:
 *   name: 角色管理
 *   description: 角色管理模块
 */

import Router from 'koa-router';
const router = new Router({ prefix: '/v1/role' });

//#region 添加角色
/**
 * @swagger
 * /v1/role/addRole:
 *   post:
 *     summary: 添加角色 (待开发)
 *     description: 添加角色
 *     tags: [角色管理]
 *
 */
// #endregion
router.post('/addRole', Controller.addRole);

//#region 删除角色
/**
 * @swagger
 * /v1/role/deleteRole:
 *   delete:
 *     summary: 删除角色 (待开发)
 *     description: 删除角色
 *     tags: [角色管理]
 *
 */
// #endregion
router.delete('/deleteRole', Controller.deleteRole);

//#region 查询单个角色
/**
 * @swagger
 * /v1/role/getRole:
 *   get:
 *     summary: 查询单个角色 (待开发)
 *     description: 查询单个角色
 *     tags: [角色管理]
 *
 */
// #endregion
router.get('/getRole');

//#region 查询角色列表
/**
 * @swagger
 * /v1/role/getAllRole:
 *   get:
 *     summary: 查询所有角色 (待开发)
 *     description: 查询所有角色
 *     tags: [角色管理]
 *
 */
// #endregion
router.get('/getAllRole');

//#region 更新角色本身
/**
 * @swagger
 * /v1/role/updataRole:
 *   post:
 *     summary: 更新角色本身 (待开发)
 *     description: 更新角色本身
 *     tags: [角色管理]
 *
 */
// #endregion
router.post('/updataRole');

//#region 查询用户角色
/**
 * @swagger
 * /v1/role/getAccountRole:
 *   get:
 *     summary: 查询用户角色 (待开发)
 *     description: 查询用户角色
 *     tags: [角色管理]
 *
 */
// #endregion

//#region 查询角色对应的用户列表
/**
 * @swagger
 * /v1/role/getRoleAccountList:
 *   get:
 *     summary: 查询用户角色 (待开发)
 *     description: 查询用户角色
 *     tags: [角色管理]
 *
 */
// #endregion

//#region 给角色添加用户
/**
 * @swagger
 * /v1/role/addRoleForAccount:
 *   post:
 *     summary: 给角色添加用户 (待开发)
 *     description: 给角色添加用户
 *     tags: [角色管理]
 *
 */
// #endregion

//#region 删除用户的角色
/**
 * @swagger
 * /v1/role/deleteRoleForAccount:
 *   delete:
 *     summary: 删除用户的角色 (待开发)
 *     description: 删除用户的角色
 *     tags: [角色管理]
 *
 */
// #endregion

export default router;
