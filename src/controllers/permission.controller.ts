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
    const { Name, Type, RuleValue, Description, Action } = ctx.request.body;
    // 生成操作人
    let CreatedBy = 'self';
    if (ctx.state.user && ctx.state.user.AccountId !== undefined) {
      CreatedBy = ctx.state.user.AccountId;
    }
    // 操作数据库
    const res = await PermissionService.createPermission(ctx, Name, +Type, RuleValue, Description, Action, CreatedBy);
    // 返回数据
    await SUCCESS(ctx, bigIntToString(res), '添加权限成功');
  }
}

export default new PermissionController();
