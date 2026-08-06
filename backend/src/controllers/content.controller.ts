import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllContent = async (req: Request, res: Response) => {
  try {
    const content = await prisma.siteContent.findMany();
    // Convert to a dictionary: { section: { key: value } }
    const contentDict = content.reduce((acc: any, item) => {
      if (!acc[item.section]) acc[item.section] = {};
      acc[item.section][item.key] = item.value;
      return acc;
    }, {});
    res.json(contentDict);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateContent = async (req: Request, res: Response) => {
  try {
    const { updates } = req.body; // Array of { section, key, value }
    
    const results = await Promise.all(
      updates.map((update: any) => 
        prisma.siteContent.upsert({
          where: { section_key: { section: update.section, key: update.key } },
          update: { value: String(update.value) },
          create: { section: update.section, key: update.key, value: String(update.value) }
        })
      )
    );
    
    res.json({ message: 'Content updated successfully', results });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
