//这个文件用户管理接口的业务逻辑
import AccountService from '../services/account.service';
import { bigIntToString } from '../utils/util';
import { sign } from 'jsonwebtoken';
import { JWT } from '../config/constant';

class AccountController {
  //用户注册
  async register(ctx: any, next: any) {
    // 获取数据
    const { Account, Password, Email, Phone } = ctx.request.body;
    const Name = Account;
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
      Email: {
        type: 'string',
        required: false,
      },
      Phone: {
        type: 'string',
        required: false,
      },
    });

    // 操作数据库
    const res = await AccountService.createAccount(ctx, Account, Password, Name, Email, Phone);

    //返回数据
    const newRes = { ...res };
    if (typeof res.AccountId === 'bigint') newRes.AccountId = bigIntToString(res.AccountId);
    ctx.body = {
      code: 0,
      msg: '用户注册成功',
      data: newRes,
    };
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
    const newRes = { ...res };
    if (typeof res.AccountId === 'bigint') newRes.AccountId = bigIntToString(res.AccountId);
    const token = 'Bearer ' + sign({ AccountId: newRes.AccountId }, JWT.secret, { expiresIn: JWT.expires });

    // 返回数据

    ctx.body = {
      code: 0,
      msg: '用户登录成功',
      data: { token: token },
    };
  }

  // 查询所有用户
  async getAllAccount(ctx: any, next: any) {
    // 操作数据库
    const res = await AccountService.getAllAccount(ctx);

    // 处理bigint类型的数据
    res.forEach((val, idx) => {
      if (typeof val.AccountId === 'bigint') res[idx].AccountId = bigIntToString(val.AccountId);
    });
    // 返回数据
    ctx.body = {
      code: 0,
      msg: '查询成功',
      data: res,
    };
  }

  // 查询单个用户
  async getAccount(ctx: any, next: any) {
    // 操作数据库
    const res = await AccountService.getAccount(ctx);

    // 返回数据
    const newRes = { ...res };
    if (typeof res.AccountId === 'bigint') newRes.AccountId = bigIntToString(res.AccountId);
    ctx.body = {
      code: 0,
      msg: '查询成功',
      data: newRes,
    };
  }
}
export default new AccountController();
