import { newEnforcer } from 'casbin';
import { PrismaAdapter } from 'casbin-prisma-adapter';

class Casbin {
  enforcer: any;
  constructor() {
    this.init();
  }
  async init() {
    //const a = await PrismaAdapter.newAdapter();
    //const e = await newEnforcer('src/config/casbin.model.conf', a);
    const enforcer = await newEnforcer('src/config/casbin.model.conf', 'src/config/policy.csv');
    console.log('初始化完成'); // 检查 enforcer 对象是否正确初始化
    this.enforcer = enforcer;
    console.log(this.enforcer);
  }

  // 查询用户的角色(根据accountId)
  async getAccountRoles(accountId: number) {
    const roles = await this.enforcer.getRolesForUser(accountId.toString());
    console.log(roles); // 输出该用户所拥有的角色
  }

  // 查询角色的用户
  // async getRolesAccount(Role:string){

  // }

  // 添加用户的角色(根据accountId)
  async addAccountRole(accountId: number, role: string) {
    await this.enforcer.addRoleForUser(accountId.toString(), role);
  }
}

async function test() {
  const a = new Casbin();
  await new Promise((resolve) => setTimeout(resolve, 100));
  await a.getAccountRoles(1);
}

test();
