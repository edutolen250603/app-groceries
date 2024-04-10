import express from 'express';
import { getAll, getOne, insertOne, updateOne, deleteOne } from '../controllers/products.controllers.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:barcode', getOne);
router.post('/', insertOne);
router.put("/:barcode", updateOne); // Cambiado a PUT para actualizar
router.delete("/:barcode", deleteOne); // Cambiado a DELETE para eliminar

export default router;
