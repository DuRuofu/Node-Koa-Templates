// 权限管理模块
import { PrismaClient } from '@prisma/client';
import { DB_FAIL } from '../config/code/responseCode';
const prisma = new PrismaClient();

class PermissionService {
  // 增
  async createPermission(ctx, Name: string, Type: number, RuleValue: string, Description: string, Action: string, CreatedBy: string) {
    try {
      const result = await prisma.permission.create({
        data: {
          Name,
          Type,
          RuleValue,
          Action,
          Description,
          CreatedBy,
          UpdatedBy: CreatedBy,
        },
      });
      return result;
    } catch (error) {
      await DB_FAIL(ctx);
    }
  }

  // 删
  async deleteExample(ctx, ExampleId: number) {
    console.log(ExampleId);
    try {
      const result = await prisma.example.delete({
        where: { ExampleId },
      });
      return result;
    } catch (error) {
      console.log(error);
      await DB_FAIL(ctx);
    }
  }

  // 改
  async updateExample(ctx, ExampleId: number, Name: string, Password: string, Email: string, Phone: string) {
    try {
      const result = await prisma.example.update({
        where: { ExampleId },
        data: {
          Name,
          Password,
          Email,
          Phone,
        },
      });
      return result;
    } catch (error) {
      await DB_FAIL(ctx);
    }
  }

  // 查
  async getExample(ctx) {
    try {
      const result = await prisma.example.findMany({});
      return result;
    } catch (error) {
      //console.log(error);
      await DB_FAIL(ctx);
    }
  }
}

export default new PermissionService();
