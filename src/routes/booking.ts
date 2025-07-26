import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth';
import { createBooking, getBookings, getBooking, updateBooking, deleteBooking, saveSignature } from '../controllers/BookingController';

const router = Router();

router.post('/', authenticateJWT, createBooking);
router.get('/', getBookings);
router.get('/:id', getBooking);
router.put('/:id', authenticateJWT, updateBooking);
router.delete('/:id', authenticateJWT, deleteBooking);
router.post('/:id/signature', authenticateJWT, saveSignature);

export default router;