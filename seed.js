// seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'pavel.mansilla@gmail.com' },
    update: {},
    create: {
      name: 'pavel',
      lastName: 'mansilla goyas',
      role: 'ADMIN',
      email: 'pavel.mansilla@gmail.com',
      password: '12345', // Asegúrate de hashear la contraseña en un entorno real
    },
  });
}

main()
  .catch((e) => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });