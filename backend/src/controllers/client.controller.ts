import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getClients = async (req: Request, res: Response) => {
  try {
    const clients = await prisma.client.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const addClient = async (req: Request, res: Response) => {
  try {
    const { name, logoUrl } = req.body;
    const client = await prisma.client.create({
      data: { name, logoUrl }
    });
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteClient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.client.delete({ where: { id } });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
