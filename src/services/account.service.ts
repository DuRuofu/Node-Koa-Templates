import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class AccountService {
  // 用户注册
  async createAccount(ctx: any, Name: string, Password: string, Email: string, Phone: string) {
    try {
      const result = await prisma.example.create({
        data: {
          Name,
          Password,
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
}

export default new AccountService();
