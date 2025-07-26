import Asset from '../models/Asset';
import { Request, Response } from 'express';

export const createAsset = async (req: Request, res: Response) => {
  try {
    const asset = new Asset({ ...req.body, owner: req.user.id });
    await asset.save();
    res.status(201).json(asset);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create asset.' });
  }
};

export const getAssets = async (req: Request, res: Response) => {
  const assets = await Asset.find();
  res.json(assets);
};

export const getAsset = async (req: Request, res: Response) => {
  const asset = await Asset.findById(req.params.id);
  if (!asset) return res.status(404).json({ error: 'Asset not found.' });
  res.json(asset);
};

export const updateAsset = async (req: Request, res: Response) => {
  const asset = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!asset) return res.status(404).json({ error: 'Asset not found.' });
  res.json(asset);
};

export const deleteAsset = async (req: Request, res: Response) => {
  const asset = await Asset.findByIdAndDelete(req.params.id);
  if (!asset) return res.status(404).json({ error: 'Asset not found.' });
  res.json({ message: 'Asset deleted.' });
};