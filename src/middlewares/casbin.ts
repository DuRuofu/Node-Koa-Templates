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
  // 为用户添加单个角色
  async addAccountRole(accountId: string, role: string) {
    return this.enforcer.addRoleForUser(accountId, role);
  }
  // 为用户添加多个角色。 如果用户已经拥有该角色，则返回false。
  async addAccountRoles(accountId: string, roles: string[]) {
    return roles.map((role) => this.enforcer.addRoleForUser(accountId, role));
  }

  // 删除用户的所有角色
  async deleteAccountRole(accountId: string) {
    return await this.enforcer.deleteRolesForUser(accountId);
  }

  // 为角色添加多个权限permissions = [["data1", "read"],["data2", "write"]];
  async addRolePermission(role: string, permissions: any) {
    return permissions.map((permission) => this.enforcer.addPermissionForUser(role, ...permission));
  }

  // 删除角色所有权限
  async deletePermissionsForUser(role: string) {
    // 删除角色所有权限
    return await this.enforcer.deletePermissionsForUser(role);
  }

  // 获取角色所有的权限
  async getPermissionsForUser(role: string) {
    return await this.enforcer.getPermissionsForUser(role);
  }
}

// async function test() {
//   const a = new Casbin();
//   await new Promise((resolve) => setTimeout(resolve, 100));
//   await a.getAccountRoles(1);
// }

export default new Casbin();
