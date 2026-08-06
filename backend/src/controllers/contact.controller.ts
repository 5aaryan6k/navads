import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const submitContact = async (req: Request, res: Response) => {
  try {
    const { encryptedData, iv } = req.body;

    if (!encryptedData || !iv) {
      return res.status(400).json({ error: 'Encrypted data and IV are required' });
    }

    await prisma.contact.create({
      data: {
        encryptedData,
        iv
      }
    });

    res.status(201).json({ message: 'Message securely sent!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
