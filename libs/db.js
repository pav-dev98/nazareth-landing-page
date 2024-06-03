import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    let prisma = null;
  
    if (!prisma) {
      prisma = new PrismaClient();
    }
  
    return prisma;
  };
  
const prisma = prismaClientSingleton();
  
export default prisma;