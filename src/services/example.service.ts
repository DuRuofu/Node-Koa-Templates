import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ExampleService {
  // 增
  async createExample(ctx, Name: string, Password: string, Email: string, Phone: string) {
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
      ctx.throw(400, '数据库错误', { code: 400, message: '添加数据失败', data: '' });
    }
  }

  // 删
  async deleteExample(ctx, AccountId: number) {
    try {
      const result = await prisma.example.delete({
        where: { AccountId },
      });
      return result;
    } catch (error) {
      //console.log(error);
      ctx.throw(400, '数据库错误', { code: 400, message: '删除数据失败', data: '' });
    }
  }

  // 改
  async updateExample(ctx, AccountId: number, Name: string, Password: string, Email: string, Phone: string) {
    try {
      const result = await prisma.example.update({
        where: { AccountId },
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
      ctx.throw(400, '数据库错误', { code: 400, message: '修改数据失败', data: '' });
    }
  }

  // 查
  async getExample(ctx, AccountId) {
    try {
      const result = await prisma.example.findUnique({
        where: { AccountId },
      });
      return result;
    } catch (error) {
      //console.log(error);
      ctx.throw(400, '数据库错误', { code: 400, message: '查询数据失败', data: '' });
    }
  }
}

export default new ExampleService();
