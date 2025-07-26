import mongoose, { Schema, Document } from 'mongoose';

export interface IAsset extends Document {
  owner: mongoose.Types.ObjectId;
  type: 'car' | 'apartment' | 'tool';
  name: string;
  description: string;
  price: number;
  location: string;
  availableDates: Date[];
  createdAt: Date;
}

const AssetSchema: Schema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['car', 'apartment', 'tool'], required: true },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  location: String,
  availableDates: [Date],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IAsset>('Asset', AssetSchema);