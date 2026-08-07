import { Router } from 'express';
import { createInquiry, getInquiries, updateInquiryStatus, deleteInquiry } from '../controllers/inquiry.controller';

const router = Router();

// Public route to submit an inquiry
router.post('/', createInquiry);

// Protected CMS routes
router.get('/', getInquiries);
router.put('/:id/status', updateInquiryStatus);
router.delete('/:id', deleteInquiry);

export default router;
