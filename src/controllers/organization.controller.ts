//这个文件负责接口的业务逻辑
import OrganizationService from '../services/organization.service';
import { bigIntToString } from '../utils/util';
import { SUCCESS, PARAM_NOT_VALID } from '../config/code/responseCode';
//增
class OrganizationController {
  // 添加组织
  async post(ctx: any, next: any) {
    // 数据校验
    // 数据校验
    try {
      ctx.verifyParams({
        Name: {
          type: 'string',
          required: true,
          message: '组织名称不能为空',
        },
        Description: {
          type: 'string',
          required: true,
          message: '组织描述不能为空',
        },
      });
    } catch (error) {
      await PARAM_NOT_VALID(ctx, error.messagr, error);
    }
    // 获取数据
    const { Name, Description } = ctx.request.body;
    // 操作数据库
    const res = await OrganizationService.createOrganization(ctx, Name, Description);
    // // 返回数据
    // const newRes = { ...res };
    // if (typeof res.ExampleId === 'bigint') newRes.ExampleId = bigIntToString(res.ExampleId);
    // await SUCCESS(ctx, newRes, '添加数据成功');
  }

  //删
  async delete(ctx: any, next: any) {
    // // 获取数据
    // const { ExampleId } = ctx.request.body;
    // // 数据验证
    // // 操作数据库
    // const res = await exampleService.deleteExample(ctx, ExampleId);
    // // 返回数据
    // const newRes = { ...res };
    // if (typeof res.ExampleId === 'bigint') newRes.ExampleId = bigIntToString(res.ExampleId);
    // await SUCCESS(ctx, newRes, '删除数据成功');
  }

  //查
  async get(ctx: any, next: any) {
    // // 获取数据
    // // 操作数据库
    // const res = await exampleService.getExample(ctx);
    // // 处理bigint类型的数据
    // res.forEach((val, idx) => {
    //   if (typeof val.ExampleId === 'bigint') res[idx].ExampleId = bigIntToString(val.ExampleId);
    // });
    // await SUCCESS(ctx, res, '查询数据成功');
  }

  //改
  async put(ctx: any, next: any) {
    // // 获取数据
    // console.log(ctx.request.body);
    // // 数据验证
    // const { AccountId, Name, Password, Email, Phone } = ctx.request.body;
    // // 操作数据库
    // const res = await exampleService.updateExample(ctx, AccountId, Name, Password, Email, Phone);
    // // 返回数据
    // const newRes = { ...res };
    // if (typeof res.ExampleId === 'bigint') newRes.ExampleId = bigIntToString(res.ExampleId);
    // ctx.body = {
    //   code: 0,
    //   msg: '删除数据成功',
    //   data: JSON.stringify(newRes),
    // };
  }
}

export default new OrganizationController();
