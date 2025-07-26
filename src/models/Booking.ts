import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  asset: mongoose.Types.ObjectId;
  renter: mongoose.Types.ObjectId;
  startDate: Date;
  endDate: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

const BookingSchema: Schema = new Schema({
  asset: { type: Schema.Types.ObjectId, ref: 'Asset', required: true },
  renter: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  signature: { type: String } // Add this line to your BookingSchema
});

export default mongoose.model<IBooking>('Booking', BookingSchema);