import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class AccountService {
  // 用户注册
  async createAccount(ctx: any, Account: string, Password: string, Name: string, Email: string, Phone: string) {
    try {
      const result = await prisma.account.create({
        data: {
          Account,
          Password,
          Name,
          Email,
          Phone,
        },
      });
      return result;
    } catch (error) {
      //console.log(error);
      ctx.throw(400, '数据库错误', { code: 400, message: '添加用户数据失败', data: '' });
    }
  }

  // 用户登录
  async login(ctx: any, Account: string, Password: string) {
    try {
      const result = await prisma.account.findUnique({
        where: { Account: Account },
      });
      if (result) {
        if (result.Password === Password) {
          return result;
        } else {
          ctx.throw(400, '密码错误', { code: 400, message: '密码错误', data: '' });
        }
      } else {
        ctx.throw(400, '用户名不存在', { code: 400, message: '用户名不存在', data: '' });
      }
    } catch (error) {
      //console.log(error);
      ctx.throw(400, '数据库错误', { code: 400, message: '查询用户数据失败', data: '' });
    }
  }
}

export default new AccountService();
