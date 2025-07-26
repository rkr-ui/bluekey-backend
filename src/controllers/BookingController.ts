import Booking from '../models/Booking';
import { Request, Response } from 'express';

export const saveSignature = async (req: Request, res: Response) => {
  try {
    const { signature } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { signature },
      { new: true }
    );
    if (!booking) return res.status(404).json({ error: 'Booking not found.' });
    res.json({ message: 'Signature saved!', booking });
  } catch (err) {
    res.status(400).json({ error: 'Failed to save signature.' });
  }
};