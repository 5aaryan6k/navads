import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getStats = async (req: Request, res: Response) => {
  try {
    const totalInquiries = await prisma.inquiry.count();
    const newInquiries = await prisma.inquiry.count({ where: { status: 'New' } });
    const totalServices = await prisma.service.count();
    const activeServices = await prisma.service.count({ where: { status: 'Published' } });
    
    // For now, hardcode published content count or derive it
    const publishedContent = 4; // Homepage, About, CEO, Contact
    
    res.status(200).json({
      totalInquiries,
      newInquiries,
      totalServices,
      activeServices,
      publishedContent
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getRecentActivity = async (req: Request, res: Response) => {
  try {
    const activities = await prisma.activityLog.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json(activities);
  } catch (error) {
    console.error('Error fetching activities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
