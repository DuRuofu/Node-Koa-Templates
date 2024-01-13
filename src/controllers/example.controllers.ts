//这个文件负责接口的业务逻辑

import ExampleService from '../services/example.service';
class ExampleController {
  //增
  async post(ctx: any, next: any) {
    // 获取数据
    console.log(ctx.request.body);
    // 数据验证

    // 操作数据库

    // 返回数据
  }

  //删
  async delete(ctx: any, next: any) {
    // 获取数据
    console.log(ctx.request.body);
    // 数据验证

    // 操作数据库

    // 返回数据
  }
  //查
  async get(ctx: any, next: any) {
    // 获取数据
    console.log(ctx.request.body);
    // 数据验证

    // 操作数据库

    // 返回数据
  }
  //改
  async put(ctx: any, next: any) {
    // 获取数据
    console.log(ctx.request.body);
    // 数据验证

    // 操作数据库

    // 返回数据
  }

  async register(ctx: any, next: any) {
    // 获取数据
    console.log(ctx.request.body);
    // 数据验证
    const { user_name, passward } = ctx.request.body;
    // 操作数据库
    const res = await ExampleService.createUser(user_name, passward);
    // 返回数据
    ctx.body = res;
  }

  async login(ctx: any, next: any) {
    ctx.body = '用户登陆成功';
  }

  async info(ctx: any, next: any) {
    // 操作数据库
    const res = await ExampleService.getUserInfo();
    ctx.body = res;
  }
}

export default new ExampleController();
