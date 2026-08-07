import { Router } from 'express';
import { createService, getServices, updateService, deleteService } from '../controllers/service.controller';

const router = Router();

router.get('/', getServices); // Public (optionally filter by status=Published)
router.post('/', createService); // Admin protected
router.put('/:id', updateService); // Admin protected
router.delete('/:id', deleteService); // Admin protected

export default router;
