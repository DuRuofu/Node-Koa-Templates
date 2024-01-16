//这个文件负责接口的业务逻辑
import AccountService from '../services/account.service';
import { CODE } from '../config/code';
import { bigIntToString } from '../utils/util';
//增
class AccountController {
  //用户注册
  async register(ctx: any, next: any) {
    // 获取数据
    const { Name, Password, Email, Phone } = ctx.request.body;
    // 数据验证

    // 操作数据库
    const res = await AccountService.createAccount(ctx, Name, Password, Email, Phone);

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
  async login(ctx: any, next: any) {}
}

export default new AccountController();
