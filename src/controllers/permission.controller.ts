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

    let data = {};
    //后端权限
    if (+type == 1) {
      data = buildTree(res, 1);
    }
    // 后端权限
    if (+type == 2) {
      data = buildTree(res, 11);
    }
    // 返回数据
    await SUCCESS(ctx, bigIntToString(data), '查询权限成功');
  }
}

// 工具函数:递归构建树形结构
// 递归构建树形结构
// 递归构建树形结构
function buildTree(data, parentType) {
  const result = [];
  data.forEach((item) => {
    if (item.Type === parentType) {
      const children = buildTree(data, item.Type + 1);
      if (children.length) {
        item.children = children;
      }
      result.push(item);
    }
  });
  return result;
}

export default new PermissionController();
