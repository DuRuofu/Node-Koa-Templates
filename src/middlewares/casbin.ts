//casbin权限管理中间件

import { newEnforcer } from 'casbin';
import { PrismaAdapter } from 'casbin-prisma-adapter';

class Casbin {
  enforcer: any;
  constructor() {
    this.init();
  }
  async init() {
    const a = await PrismaAdapter.newAdapter();
    const enforcer = await newEnforcer('src/config/casbin.model.conf', a);
    //const enforcer = await newEnforcer('src/config/casbin.model.conf', 'src/config/policy.csv');
    console.log('Casbin初始化完成'); // 检查 enforcer 对象是否正确初始化
    this.enforcer = enforcer;
    //console.log(this.enforcer);
  }

  // 查询用户的角色(根据accountId)
  async getAccountRoles(accountId: string) {
    return await this.enforcer.getRolesForUser(accountId.toString());
    //console.log(roles); // 输出该用户所拥有的角色
  }

  // 查询角色的用户(根据角色值)
  async getRolesAccount(Role: string) {
    return await this.enforcer.GetUsersForRole(Role);
  }

  // 为用户添加多个角色。 如果用户已经拥有该角色，则返回false。
  async addAccountRole(accountId: string, roles: string[]) {
    return roles.map((role) => this.enforcer.addRoleForUser(accountId, role));
  }

  // 删除用户的所有角色
  async deleteAccountRole(accountId: string) {
    return await this.enforcer.deleteRolesForUser(accountId);
  }
}

// async function test() {
//   const a = new Casbin();
//   await new Promise((resolve) => setTimeout(resolve, 100));
//   await a.getAccountRoles(1);
// }

export default new Casbin();
