import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth';
import { createAsset, getAssets, getAsset, updateAsset, deleteAsset } from '../controllers/AssetController';

const router = Router();

router.post('/', authenticateJWT, createAsset);
router.get('/', getAssets);
router.get('/:id', getAsset);
router.put('/:id', authenticateJWT, updateAsset);
router.delete('/:id', authenticateJWT, deleteAsset);

export default router;