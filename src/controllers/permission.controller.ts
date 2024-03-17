// 角色管理模块
//这个文件负责接口的业务逻辑
import PermissionService from '../services/permission.service';
import { bigIntToString } from '../utils/util';
import { SUCCESS, PARAM_NOT_VALID } from '../config/code/responseCode';

//增
class PermissionController {
  async Post(ctx: any, next: any) {
    // 数据验证
    try {
      ctx.verifyParams({
        Tag: {
          type: 'string',
          required: true,
          message: '权限名称不能为空',
        },
        Name: {
          type: 'string',
          required: true,
          message: '权限名称不能为空',
        },
        Type: {
          type: 'string',
          required: true,
          message: '权限类型不能为空',
        },
        RuleValue: {
          type: 'string',
          required: true,
          message: '权限值不能为空',
        },
      });
    } catch (error) {
      await PARAM_NOT_VALID(ctx, error.messagr, error);
    }
    // 获取数据
    const { Name, Tag, Type, RuleValue, Description, Action } = ctx.request.body;
    // 生成操作人
    let CreatedBy = 'self';
    if (ctx.state.user && ctx.state.user.AccountId !== undefined) {
      CreatedBy = ctx.state.user.AccountId;
    }
    // 操作数据库
    const res = await PermissionService.createPermission(ctx, Tag, Name, +Type, RuleValue, Description, Action, CreatedBy);
    // 返回数据
    await SUCCESS(ctx, bigIntToString(res), '添加权限成功');
  }

  // 查
  async Get(ctx: any, next: any) {
    // 数据校验
    try {
      ctx.verifyParams({
        type: {
          type: 'string',
          required: true,
          message: '权限类型不能为空',
        },
      });
    } catch (error) {
      await PARAM_NOT_VALID(ctx, error.messagr, error);
    }
    // 获取数据
    const type = ctx.params.type;
    const res = await PermissionService.getPermission(ctx, +type);

    //console.log('res', res);
    let data = {};
    //后端权限
    if (+type == 1) {
      data = organizePermissionsByType(res, 1);
    }
    // 后端权限
    if (+type == 2) {
      data = organizePermissionsByType(res, 11);
    }
    //返回数据
    await SUCCESS(ctx, bigIntToString(data), '查询权限成功');
  }
}

// 工具函数:
/**
 * Organizes permissions by type and groups them by tag.
 * Moves child permissions under parent permissions based on their type.
 *
 * @param {Array} permissions - The array of permissions to organize.
 * @param {number} topLevelType - The type of the top-level permissions.
 * @returns {Array} An array of organized permissions.
 */
function organizePermissionsByType(permissions: any, topLevelType: any) {
  const organizedPermissions = [];
  const permissionMap = {};

  // Group permissions by tag and type
  permissions.forEach((permission: any) => {
    const tag = permission.Tag;
    const type = permission.Type;
    if (!(tag in permissionMap)) {
      permissionMap[tag] = {};
    }
    if (!(type in permissionMap[tag])) {
      permissionMap[tag][type] = [];
    }
    permissionMap[tag][type].push(permission);
  });

  // Organize permissions within each tag
  for (const tag in permissionMap) {
    const tagPermissions = permissionMap[tag];
    const topLevelPermissions = tagPermissions[topLevelType.toString()] || [];
    for (const type in tagPermissions) {
      if (type !== topLevelType.toString()) {
        const childPermissions = tagPermissions[type.toString()] || [];
        topLevelPermissions.forEach((parentPermission) => {
          parentPermission.children = parentPermission.children || [];
          parentPermission.children.push(...childPermissions);
        });
      }
    }
    organizedPermissions.push(...topLevelPermissions);
  }

  return organizedPermissions;
}

export default new PermissionController();
