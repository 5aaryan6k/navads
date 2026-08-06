import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  await prisma.adminUser.upsert({
    where: { email: 'admin@naviads.com' },
    update: {},
    create: {
      email: 'admin@naviads.com',
      password: hashedPassword,
    },
  });

  // Seed default site content
  const defaultContent = [
    { section: 'hero', key: 'title', value: 'Excellence in Industrial Solutions' },
    { section: 'hero', key: 'subtitle', value: 'Delivering world-class construction, facility management, and professional services across Saudi Arabia with uncompromising quality.' },
    { section: 'about', key: 'description', value: 'Navi Ads Company is a trusted provider of professional services including cleaning, painting, welding, and labour solutions. Based in Riyadh, Saudi Arabia, we bring decades of combined experience to every project.' }
  ];

  for (const content of defaultContent) {
    await prisma.siteContent.upsert({
      where: { section_key: { section: content.section, key: content.key } },
      update: {},
      create: content,
    });
  }

  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
