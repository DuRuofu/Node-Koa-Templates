//这个文件负责接口的业务逻辑
import OrganizationService from '../services/organization.service';
import { bigIntToString } from '../utils/util';
import { SUCCESS, PARAM_NOT_VALID } from '../config/code/responseCode';
//增
class OrganizationController {
  // 添加组织
  async post(ctx: any, next: any) {
    // 数据校验
    // 数据校验
    try {
      ctx.verifyParams({
        Name: {
          type: 'string',
          required: true,
          message: '组织名称不能为空',
        },
        Description: {
          type: 'string',
          required: true,
          message: '组织描述不能为空',
        },
        Level: {
          type: 'string',
          required: true,
          message: '组织等级不能为空',
        },
        LevelName: {
          type: 'string',
          required: true,
          message: '组织等级名称不能为空',
        },
        ParentId: {
          type: 'string',
          required: true,
          message: '上级组织id不能为空',
        },
      });
    } catch (error) {
      await PARAM_NOT_VALID(ctx, error.messagr, error);
    }
    // 获取数据
    const { Name, Description, Level, LevelName, ParentId } = ctx.request.body;
    // 操作数据库
    const res = await OrganizationService.createOrganization(ctx, Name, Description, +Level, LevelName, ParentId);
    // 返回数据
    await SUCCESS(ctx, bigIntToString(res), '添加成功');
  }

  //删
  async delete(ctx: any, next: any) {
    console.log('111');
    console.log(ctx.request.body);
    // 数据校验
    try {
      ctx.verifyParams({
        OrganizationId: {
          type: 'string',
          required: true,
          message: '组织id不能为空',
        },
      });
    } catch (error) {
      await PARAM_NOT_VALID(ctx, error.messagr, error);
    }
    console.log('111');
    console.log(ctx.request.body);
    // 获取数据
    const { OrganizationId } = ctx.request.body;
    // 操作数据库
    const res = await OrganizationService.deleteOrganization(ctx, OrganizationId);
    // 返回数据
    await SUCCESS(ctx, bigIntToString(res), '删除成功');
  }

  // 查询全部(树型数据)
  async getOrganizationTrees(ctx: any, next: any) {
    // 操作数据库
    const res = await OrganizationService.getOrganizationTrees(ctx);
    const data = buildOrganizationTree(bigIntToString(res));
    // 返回数据
    await SUCCESS(ctx, data, '查询数据成功');
  }

  // 查询全部(分页)
  async getOrganizationList(ctx: any, next: any) {
    // 操作数据库
    const { Page, PageSize } = ctx.request.body;
    const res = await OrganizationService.getOrganizationList(ctx, Page, PageSize);
    // 返回数据
    await SUCCESS(ctx, bigIntToString(res), '查询数据成功');
  }

  //查
  async get(ctx: any, next: any) {
    // // 获取数据
    // // 操作数据库
    // const res = await exampleService.getExample(ctx);
    // // 处理bigint类型的数据
    // res.forEach((val, idx) => {
    //   if (typeof val.ExampleId === 'bigint') res[idx].ExampleId = bigIntToString(val.ExampleId);
    // });
    // await SUCCESS(ctx, res, '查询数据成功');
  }

  //改
  async put(ctx: any, next: any) {
    // // 获取数据
    // console.log(ctx.request.body);
    // // 数据验证
    // const { AccountId, Name, Password, Email, Phone } = ctx.request.body;
    // // 操作数据库
    // const res = await exampleService.updateExample(ctx, AccountId, Name, Password, Email, Phone);
    // // 返回数据
    // const newRes = { ...res };
    // if (typeof res.ExampleId === 'bigint') newRes.ExampleId = bigIntToString(res.ExampleId);
    // ctx.body = {
    //   code: 0,
    //   msg: '删除数据成功',
    //   data: JSON.stringify(newRes),
    // };
  }
}

// 工具函数:构建部门树型数据
function buildOrganizationTree(data: any) {
  // 将数据转换为以OrganizationId为key的对象
  const idMap = {};
  data.forEach((item: any) => {
    idMap[item.OrganizationId] = { ...item, children: [] };
  });

  // 构建树形结构
  const tree = [];
  data.forEach((item: any) => {
    if (item.ParentId && idMap[item.ParentId]) {
      idMap[item.ParentId].children.push(idMap[item.OrganizationId]);
    } else {
      tree.push(idMap[item.OrganizationId]);
    }
  });

  // 遍历树，删除子节点为空的情况
  const removeEmptyChildren = (node: any) => {
    if (node.children.length === 0) {
      delete node.children;
    } else {
      node.children.forEach((child: any) => {
        removeEmptyChildren(child);
      });
    }
  };

  tree.forEach((item: any) => {
    removeEmptyChildren(item);
  });

  return tree;
}

export default new OrganizationController();
