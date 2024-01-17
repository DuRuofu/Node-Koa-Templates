//这个文件用户管理接口的业务逻辑
import AccountService from '../services/account.service';
import { CODE } from '../config/code';
import { bigIntToString } from '../utils/util';

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

    //返回数据
    const newRes = { ...res };
    if (typeof res.AccountId === 'bigint') newRes.AccountId = bigIntToString(res.AccountId);
    ctx.body = {
      code: 0,
      msg: '用户登录成功',
      data: newRes,
    };
  }
}

export default new AccountController();
