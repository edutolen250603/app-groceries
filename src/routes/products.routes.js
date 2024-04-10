import { Router } from "express";
import { getAll, getOne, insertOne, updateOne, deleteOne } from '../controllers/products.controllers.js';

const router = Router();

// Ruta para obtener todos los productos
router.get('/', getAll);

// Ruta para obtener un producto por su código de barras
router.get('/:barcode', getOne);

// Ruta para insertar un nuevo producto
router.post('/', insertOne);

// Ruta para actualizar un producto por su código de barras
router.post("/:barcode", updateOne);

// Ruta para eliminar un producto por su código de barras
router.get("/delete/:barcode", deleteOne);

export default router;
