// 权限管理模块
import { PrismaClient } from '@prisma/client';
import { DB_FAIL } from '../config/code/responseCode';
const prisma = new PrismaClient();

class PermissionService {
  // 增(单个)
  async createPermission(
    ctx,
    Tag: string,
    Name: string,
    Type: number,
    RuleValue: string,
    Description: string,
    Action: string,
    CreatedBy: string
  ) {
    try {
      const result = await prisma.permission.create({
        data: {
          Tag,
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

  // 查
  async getPermission(ctx, type: number) {
    let whereCondition: any;

    console.log('type:', type);
    if (type == 1) {
      whereCondition = {
        Type: { in: [1, 2] },
      };
    }
    if (type == 2) {
      whereCondition = {
        Type: { in: [11, 12, 13, 14, 15, 16, 17, 18, 19] },
      };
    }
    if (!whereCondition) {
      console.log('type参数错误');
      return [];
    }
    try {
      const result = await prisma.permission.findMany({
        where: whereCondition,
        select: {
          PermissionId: true,
          Tag: true,
          Name: true,
          Description: true,
          Type: true,
          RuleValue: true,
          IsDisabled: true,
          Action: true,
          CreatedTime: true,
          UpdatedTime: true,
        },
      });
      return result;
    } catch (error) {
      await DB_FAIL(ctx);
    }
  }
}

export default new PermissionService();
