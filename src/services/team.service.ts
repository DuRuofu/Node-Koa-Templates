import { PrismaClient } from '@prisma/client';
import { FAIL } from '../config/code/responseCode';
const prisma = new PrismaClient();

class TeamService {
  //增
  async createTeam(ctx: any, OrganizationId: number, Name: string, Description: string) {
    try {
      const result = await prisma.team.create({
        data: {
          OrganizationId,
          Name,
          Description,
        },
      });
      return result;
    } catch (error) {
      await FAIL(ctx, '数据库错误:添加团队数据失败');
    }
  }

  // 删
  async deleteExample(ctx: any, TeamId: number) {
    try {
      const result = await prisma.team.update({
        where: { TeamId },
        data: {
          IsDeleted: true,
        },
      });
      return result;
    } catch (error) {
      await FAIL(ctx, '数据库错误:删除团队数据失败');
    }
  }

  // 查询全部(不分页)
  async getAllTeamList(ctx: any) {
    try {
      const result = await prisma.team.findMany({});
      return result;
    } catch (error) {
      await FAIL(ctx, '数据库错误:查询团队数据失败');
    }
  }

  // 查询全部(分页)
  async getTeamList(ctx: any, page: number, pageSize: number) {
    try {
      const result = await prisma.team.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
      });
      return result;
    } catch (error) {
      await FAIL(ctx, '数据库错误:查询团队数据失败');
    }
  }

  // 按组织查询全部(不分页)
  async getTeamListByOrganizationId(ctx: any, OrganizationId: number) {
    try {
      const result = await prisma.team.findMany({
        where: { OrganizationId },
      });
      return result;
    } catch (error) {
      await FAIL(ctx, '数据库错误:查询团队数据失败');
    }
  }

  // 按组织查询全部(分页)
  async getTeamListByOrganizationIdWithPage(ctx: any, OrganizationId: number, page: number, pageSize: number) {
    try {
      const result = await prisma.team.findMany({
        where: { OrganizationId },
        skip: (page - 1) * pageSize,
        take: pageSize,
      });
      return result;
    } catch (error) {
      await FAIL(ctx, '数据库错误:查询团队数据失败');
    }
  }

  //   // 改
  //   async updateExample(ctx, ExampleId: number, Name: string, Password: string, Email: string, Phone: string) {
  //     try {
  //       const result = await prisma.example.update({
  //         where: { ExampleId },
  //         data: {
  //           Name,
  //           Password,
  //           Email,
  //           Phone,
  //         },
  //       });
  //       return result;
  //     } catch (error) {
  //       await DB_FAIL(ctx);
  //     }
  //   }
  //   // 查
  //   async getExample(ctx) {
  //     try {
  //       const result = await prisma.example.findMany({});
  //       return result;
  //     } catch (error) {
  //       //console.log(error);
  //       await DB_FAIL(ctx);
  //     }
  //   }
}

export default new TeamService();
