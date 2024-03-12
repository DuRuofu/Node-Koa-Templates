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
        page: {
          type: 'string',
          required: true,
          message: '当前页数不能为空',
        },
        limit: {
          type: 'string',
          required: true,
          message: '每页记录数不能为空',
        },
      });
    } catch (error) {
      await PARAM_NOT_VALID(ctx, error.messagr, error);
    }
    // 数据提取
    const { page, limit } = ctx.params;
    // 操作数据库
    const res = await AccountService.getAllAccount(ctx, parseInt(page), parseInt(limit));
    const [accounts, totalCount] = res;
    // 返回数据
    await SUCCESS(ctx, bigIntToString({ total: totalCount, records: accounts }), '查询成功');
  }

  // 查询单个用户(id)
  async getAccount(ctx: any, next: any) {
    // 数据校验
    try {
      ctx.verifyParams({
        id: {
          type: 'string',
          required: true,
          message: '用户id不能为空',
        },
      });
    } catch (error) {
      await PARAM_NOT_VALID(ctx, error.messagr, error);
    }
    // 数据提取
    const id = ctx.params.id;
    // 操作数据库
    const res = await AccountService.getAccount(ctx, id);

    // 返回数据
    // 返回数据
    await SUCCESS(ctx, bigIntToString(res), '查询成功');
  }

  // 查询单个用户(token)
  async getSelfAccount(ctx: any, next: any) {
    // 数据提取
    const id = ctx.state.user.AccountId;
    // 操作数据库
    const res = await AccountService.getAccount(ctx, id);
    // 返回数据
    await SUCCESS(ctx, bigIntToString(res), '查询成功');
  }

  // 删除用户
  async deleteAccount(ctx: any, next: any) {}
}
export default new AccountController();
