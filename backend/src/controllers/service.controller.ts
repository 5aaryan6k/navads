import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createService = async (req: Request, res: Response) => {
  try {
    const { name, slug, category, status, shortDescription, fullDescription, featuredImage } = req.body;
    
    const service = await prisma.service.create({
      data: { name, slug, category, status, shortDescription, fullDescription, featuredImage }
    });

    await prisma.activityLog.create({
      data: {
        user: 'Admin',
        action: 'Created service',
        target: name
      }
    });

    res.status(201).json(service);
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getServices = async (req: Request, res: Response) => {
  try {
    const { status } = req.query;
    const where = status ? { status: String(status) } : {};
    
    const services = await prisma.service.findMany({
      where,
      orderBy: { updatedAt: 'desc' }
    });
    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateService = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { name, slug, category, status, shortDescription, fullDescription, featuredImage } = req.body;

    const service = await prisma.service.update({
      where: { id },
      data: { name, slug, category, status, shortDescription, fullDescription, featuredImage }
    });

    await prisma.activityLog.create({
      data: {
        user: 'Admin',
        action: 'Updated service',
        target: name
      }
    });

    res.status(200).json(service);
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteService = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const service = await prisma.service.delete({ where: { id } });
    
    await prisma.activityLog.create({
      data: {
        user: 'Admin',
        action: 'Deleted service',
        target: service.name
      }
    });

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
