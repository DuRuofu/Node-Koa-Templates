import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { bigIntToString } from '../utils/util';
import { FAIL, USER_ACCOUNT_ALREADY_EXIST, USER_PWD_ERROR } from '../config/code/responseCode';
class AccountService {
  // 用户注册
  async createAccount(ctx: any, OrganizationId: number, Account: string, Password: string, Name: string, Email: string, Phone: string) {
    try {
      const result = await prisma.account.create({
        data: {
          OrganizationId,
          Account,
          Password,
          Name,
          Email,
          Phone,
        },
      });
      return result;
    } catch (error) {
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
      const result = await prisma.account.findMany({
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
    }
  }

  // 分页查询用户
  async getAllAccount(ctx: any, page: number, pageSize: number) {
    try {
      const result = await prisma.$transaction([
        // 查询数据
        prisma.account.findMany({
          skip: (page - 1) * pageSize,
          take: pageSize,
          select: {
            Account: true,
            Name: true,
            AvatarUrl: true,
            Email: true,
            Phone: true,
          },
        }),
        // 查询总数
        prisma.account.count(),
      ]);
      return result;
    } catch (error) {
      console.log(error);
      //console.log(error);
      await FAIL(ctx, '数据库错误:查询用户数据失败');
    }
  }

  // 获取单个用户
  async getAccount(ctx: any, id: string) {
    try {
      const result = await prisma.account.findUnique({
        where: { AccountId: id, IsDeleted: false },
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
    }
  }
}

export default new AccountService();
