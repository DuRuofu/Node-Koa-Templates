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
        TeamId: {
          type: 'string',
          required: true,
          message: '团队Id不能为空',
        },
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
    const { TeamId, Account, Password, Email, Phone } = ctx.request.body;
    const Name = Account;
    // 操作数据库
    const res = await AccountService.createAccount(ctx, TeamId, Account, Password, Name, Email, Phone);

    //返回数据
    await SUCCESS(ctx, bigIntToString(res), '用户注册成功');
  }

  //用户登录
  async login(ctx: any, next: any) {
    // 数据校验
    try {
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
    } catch (error) {
      await PARAM_NOT_VALID(ctx, error.messagr, error);
    }
    // 获取数据
    const { Account, Password } = ctx.request.body;
    // 操作数据库
    const res = await AccountService.login(ctx, Account, Password);

    // 颁发token
    const token = 'Bearer ' + sign({ AccountId: res.AccountId }, JWT.secret, { expiresIn: JWT.expires });

    // 返回数据
    await SUCCESS(ctx, { token: token }, '用户登录成功');
  }

  // 查询所有用户(无分页)
  async getAllAccountList(ctx: any, next: any) {
    // 操作数据库
    const res = await AccountService.getAllAccountList(ctx);

    // 返回数据
    await SUCCESS(ctx, bigIntToString(res), '查询成功');
  }

  // 查询用户列表(分页)
  async getAllAccount(ctx: any, next: any) {
    // 数据校验
    try {
      ctx.verifyParams({
        Page: {
          type: 'string',
          required: true,
          message: '当前页数不能为空',
        },
        Iimit: {
          type: 'string',
          required: true,
          message: '每页记录数不能为空',
        },
      });
    } catch (error) {
      await PARAM_NOT_VALID(ctx, error.messagr, error);
    }
    console.log(ctx.request.query);
    // 数据提取
    const { Page, Iimit } = ctx.request.query;
    // 操作数据库
    const res = await AccountService.getAllAccount(ctx, parseInt(Page), parseInt(Iimit));
    // 返回数据
    await SUCCESS(ctx, bigIntToString(res), '查询成功');
  }

  // 查询单个用户
  async getAccount(ctx: any, next: any) {
    // 操作数据库
    const res = await AccountService.getAccount(ctx);

    // 返回数据
    // 返回数据
    await SUCCESS(ctx, bigIntToString(res), '查询成功');
  }

  // 删除用户
  async deleteAccount(ctx: any, next: any) {}
}
export default new AccountController();
