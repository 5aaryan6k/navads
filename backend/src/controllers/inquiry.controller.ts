import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createInquiry = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, service, message } = req.body;
    
    const inquiry = await prisma.inquiry.create({
      data: { name, email, phone, service, message }
    });

    // Also log this activity
    await prisma.activityLog.create({
      data: {
        user: 'System',
        action: 'Received inquiry',
        target: name
      }
    });

    res.status(201).json(inquiry);
  } catch (error) {
    console.error('Error creating inquiry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getInquiries = async (req: Request, res: Response) => {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateInquiryStatus = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { status } = req.body;

    const inquiry = await prisma.inquiry.update({
      where: { id },
      data: { status }
    });

    await prisma.activityLog.create({
      data: {
        user: 'Admin', // In real app, get from auth middleware
        action: 'Updated inquiry status',
        target: inquiry.name
      }
    });

    res.status(200).json(inquiry);
  } catch (error) {
    console.error('Error updating inquiry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteInquiry = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    await prisma.inquiry.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
