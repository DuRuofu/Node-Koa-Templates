//这个文件负责接口的业务逻辑
import ExampleService from '../services/example.service';
import { CODE } from '../config/code';

// 处理bigint类型的数据
function bigIntToString(value) {
  const MAX_SAFE_INTEGER = 2 ** 53 - 1;
  return value <= MAX_SAFE_INTEGER ? Number(value) : value.toString();
}

//增
class ExampleController {
  async post(ctx: any, next: any) {
    // 获取数据
    const { Name, Password, Email, Phone } = ctx.request.body;
    // 数据验证

    // 操作数据库
    const res = await ExampleService.createExample(ctx, Name, Password, Email, Phone);

    // 返回数据
    const newRes = { ...res };
    if (typeof res.AccountId === 'bigint') newRes.AccountId = bigIntToString(res.AccountId);
    ctx.body = {
      code: 0,
      msg: '添加数据成功',
      data: newRes,
    };
  }

  //删
  async delete(ctx: any, next: any) {
    // 获取数据
    const { AccountId } = ctx.request.body;

    // 数据验证

    // 操作数据库
    const res = await ExampleService.deleteExample(ctx, AccountId);

    // 返回数据
    const newRes = { ...res };
    if (typeof res.AccountId === 'bigint') newRes.AccountId = bigIntToString(res.AccountId);
    ctx.body = {
      code: 0,
      msg: '删除数据成功',
      data: newRes,
    };
  }

  //查
  async get(ctx: any, next: any) {
    // 获取数据
    const { id } = ctx.request.body;

    // 数据验证

    // 操作数据库
    const res = await ExampleService.getExample(ctx, id);

    // 返回数据
    const newRes = { ...res };
    if (typeof res.AccountId === 'bigint') newRes.AccountId = bigIntToString(res.AccountId);
    ctx.body = {
      code: 0,
      msg: '删除数据成功',
      data: newRes,
    };
  }

  //改
  async put(ctx: any, next: any) {
    // 获取数据
    console.log(ctx.request.body);

    // 数据验证
    const { AccountId, Name, Password, Email, Phone } = ctx.request.body;

    // 操作数据库
    const res = await ExampleService.updateExample(ctx, AccountId, Name, Password, Email, Phone);

    // 返回数据
    const newRes = { ...res };
    if (typeof res.AccountId === 'bigint') newRes.AccountId = bigIntToString(res.AccountId);
    ctx.body = {
      code: 0,
      msg: '删除数据成功',
      data: JSON.stringify(newRes),
    };
  }
}

export default new ExampleController();
