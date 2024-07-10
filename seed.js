// seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'salva@gmail.com' },
    update: {},
    create: {
      email: 'salva@gmail.com',
      password: '12345', // Asegúrate de hashear la contraseña en un entorno real
    },
  });

  console.log({ admin });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });