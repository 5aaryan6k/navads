import { Router } from 'express';
import { getClients, addClient, deleteClient } from '../controllers/client.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.get('/', getClients); // Public access
router.post('/', authMiddleware, addClient); // Protected access
router.delete('/:id', authMiddleware, deleteClient); // Protected access

export default router;
