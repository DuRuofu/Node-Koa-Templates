import { PrismaClient } from '@prisma/client';
import Static from 'koa-static';
const prisma = new PrismaClient();
import { FAIL, USER_ACCOUNT_ALREADY_EXIST, USER_PWD_ERROR } from '../config/code/responseCode';
class AccountService {
  // 用户注册
  async createAccount(ctx: any, TeamId: number, Account: string, Password: string, Name: string, Email: string, Phone: string) {
    try {
      const result = await prisma.account.create({
        data: {
          TeamId,
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
      await FAIL(ctx, '数据库错误:添加用户数据失败');
    }
  }

  // 用户登录
  async login(ctx: any, Account: string, Password: string) {
    try {
      const result = await prisma.account.findUnique({
        where: { Account: Account, IsDeleted: false },
      });
      if (result) {
        if (result.Password === Password) {
          return result;
        } else {
          await USER_PWD_ERROR(ctx);
        }
      } else {
        await USER_ACCOUNT_ALREADY_EXIST(ctx);
      }
    } catch (error) {
      //console.log(error);
      await FAIL(ctx, '数据库错误:查询用户数据失败');
    }
  }

  // 获取所有用户
  async getAllAccountList(ctx: any) {
    try {
      const result = await prisma.account.findMany();
      return result;
    } catch (error) {
      //console.log(error);
      await FAIL(ctx, '数据库错误:查询用户数据失败');
      //ctx.throw(400, '数据库错误', { code: 400, message: '查询用户数据失败', data: '' });
    }
  }

  // 分页查询用户
  async getAllAccount(ctx: any, page: number, pageSize: number) {
    try {
      const result = await prisma.account.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
      });
      return result;
    } catch (error) {
      console.log(error);
      //console.log(error);
      await FAIL(ctx, '数据库错误:查询用户数据失败');
      //ctx.throw(400, '数据库错误', { code: 400, message: '查询用户数据失败', data: '' });
    }
  }

  // 获取单个用户
  async getAccount(ctx: any) {
    try {
      const result = await prisma.account.findUnique({
        where: { AccountId: ctx.state.user.AccountId, IsDeleted: false },
        select: {
          Account: true,
          Name: true,
          AvatarUrl: true,
          Email: true,
          Phone: true,
        },
      });
      return result;
    } catch (error) {
      //console.log(error);
      await FAIL(ctx, '数据库错误:查询用户数据失败');
      //ctx.throw(400, '数据库错误', { code: 400, message: '查询用户数据失败', data: '' });
    }
  }
}

export default new AccountService();
