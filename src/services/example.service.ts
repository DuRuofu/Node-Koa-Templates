import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ExampleService {
  // 增
  async createExample(Name: string, Password: string, Email: string, Phone: string) {
    const result = await prisma.example.create({
      data: {
        Name,
        Password,
        Email,
        Phone,
      },
    });
    return result;
  }

  // 删
  async deleteExample(AccountId: number) {
    const result = await prisma.example.delete({
      where: { AccountId },
    });
    return result;
  }

  // 改
  async updateExample(AccountId: number, Name: string, Password: string, Email: string, Phone: string) {
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
  }

  // 查
  async getExample(AccountId) {
    const result = await prisma.example.findUnique({
      where: { AccountId },
    });
    return result;
  }
}

export default new ExampleService();
