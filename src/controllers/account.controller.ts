//这个文件用户管理接口的业务逻辑
import AccountService from '../services/account.service';
import { bigIntToString } from '../utils/util';
import { sign } from 'jsonwebtoken';
import { JWT } from '../config/constant';
import { SUCCESS, PARAM_NOT_VALID } from '../config/code/responseCode';
class AccountController {
  //用户注册
  async register(ctx: any, next: any) {
    // 数据校验
    try {
      ctx.verifyParams({
        Account: {
          type: 'string',
          required: true,
          message: '账户不能为空',
        },
        Password: {
          type: 'string',
          required: true,
          message: '密码不能为空',
        },
        Email: {
          type: 'string',
          required: true,
        },
        Phone: {
          type: 'string',
          required: false,
        },
      });
    } catch (error) {
      await PARAM_NOT_VALID(ctx, error.messagr, error);
    }
    // 获取数据
    const { Account, Password, Email, Phone } = ctx.request.body;
    const Name = Account;
    // 操作数据库
    const res = await AccountService.createAccount(ctx, Account, Password, Name, Email, Phone);

    //返回数据
    await SUCCESS(ctx, res, '用户注册成功');
  }

  //用户登录
  async login(ctx: any, next: any) {
    // 获取数据
    const { Account, Password } = ctx.request.body;
    // 数据校验
    ctx.verifyParams({
      Account: {
        type: 'string',
        required: true,
      },
      Password: {
        type: 'string',
        required: true,
      },
    });

    // 操作数据库
    const res = await AccountService.login(ctx, Account, Password);

    // 颁发token
    const token = 'Bearer ' + sign({ AccountId: res.AccountId }, JWT.secret, { expiresIn: JWT.expires });

    // 返回数据
    await SUCCESS(ctx, { token: token }, '用户登录成功');
  }

  // 查询所有用户
  async getAllAccount(ctx: any, next: any) {
    // 操作数据库
    const res = await AccountService.getAllAccount(ctx);

    // 返回数据
    await SUCCESS(ctx, res, '查询成功');
  }

  // 查询单个用户
  async getAccount(ctx: any, next: any) {
    // 操作数据库
    const res = await AccountService.getAccount(ctx);

    // 返回数据
    // 返回数据
    await SUCCESS(ctx, res, '查询成功');
  }

  // 删除用户
  async deleteAccount(ctx: any, next: any) {}
}
export default new AccountController();
