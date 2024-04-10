// products.routes.js
import express from 'express';
import { getAll, getOne, insertOne, updateOne, deleteOne } from '../controllers/products.controller.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:barcode', getOne);
router.post('/', insertOne);
router.post("/:barcode", updateOne);
router.delete("/:barcode", deleteOne);

export default router;
