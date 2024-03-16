// 权限管理模块
import { PrismaClient } from '@prisma/client';
import { DB_FAIL } from '../config/code/responseCode';
const prisma = new PrismaClient();

class PermissionService {
  // 增(单个)
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
}

export default new PermissionService();
