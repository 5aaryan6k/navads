import { Router } from 'express';
import { submitContact, getContacts } from '../controllers/contact.controller';

const router = Router();

router.post('/', submitContact);
router.get('/', getContacts);

export default router;
