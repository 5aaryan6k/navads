import { Router } from 'express';
import { getAllContent, updateContent } from '../controllers/content.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.get('/', getAllContent); // Public access
router.put('/', authMiddleware, updateContent); // Protected access

export default router;
