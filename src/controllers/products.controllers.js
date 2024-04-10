import express from 'express';
import ProductDAO from "../dao/products.dao.js";

const app = express();

// Middleware para establecer el tipo de contenido de todas las respuestas como JSON
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// Controlador de productos
const productsController = {};

// Obtener todos los productos
productsController.getAll = (req, res) => {
    ProductDAO.getAll()
        .then(products => {
            res.json({ products });
        })
        .catch(err => res.json({ status: "Server unavailable" }));
}

// Obtener un producto por código de barras
productsController.getOne = (req, res) => {
    const barcode = req.params.barcode;
    ProductDAO.getOne(barcode)
        .then(product => {
            if (product) {
                res.json({ product });
            } else {
                res.json({ status: "Product not found" });
            }
        })
        .catch(err => res.json({ status: "Server unavailable" }));
}

// Insertar un nuevo producto
productsController.insertOne = (req, res) => {
    ProductDAO.insertOne(req.body)
        .then(result => res.json({ result }))
        .catch(err => res.json({ status: "Server unavailable" }));
}

// Actualizar un producto existente
productsController.updateOne = (req, res) => {
    const barcode = req.params.barcode;
    const product = req.body;
    ProductDAO.updateOne(barcode, product)
        .then(result => {
            if (result) {
                res.json({ result });
            } else {
                res.json({ status: "Product not found" });
            }
        })
        .catch(err => res.json({ status: "Server unavailable" }));
}

// Eliminar un producto
productsController.deleteOne = (req, res) => {
    const barcode = req.params.barcode;
    ProductDAO.deleteOne(barcode)
        .then(result => {
            if (result) {
                res.json({ result });
            } else {
                res.json({ status: "Product not found" });
            }
        })
        .catch(err => res.json({ status: "Server unavailable" }));
};

export default app;
