import { Router } from 'express';
import { getStats, getRecentActivity } from '../controllers/stats.controller';

const router = Router();

router.get('/stats', getStats);
router.get('/activity', getRecentActivity);

export default router;
