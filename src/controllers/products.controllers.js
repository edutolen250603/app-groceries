// products.controller.js
import ProductDAO from "../dao/products.dao.js";

const productsController = {};

productsController.getAll = async (req, res) => {
    try {
        const products = await ProductDAO.getAll();
        res.json({ products });
    } catch (err) {
        res.status(500).json({ error: "Server unavailable" });
    }
};

productsController.getOne = async (req, res) => {
    const barcode = req.params.barcode;
    try {
        const product = await ProductDAO.getOne(barcode);
        if (product) {
            res.json({ product });
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Server unavailable" });
    }
};

productsController.insertOne = async (req, res) => {
    try {
        const result = await ProductDAO.insertOne(req.body);
        res.json({ result });
    } catch (err) {
        res.status(500).json({ error: "Server unavailable" });
    }
};

productsController.updateOne = async (req, res) => {
    const barcode = req.params.barcode;
    const product = req.body;
    try {
        const result = await ProductDAO.updateOne(barcode, product);
        if (result) {
            res.json({ result });
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Server unavailable" });
    }
};

// products.controllers.js
export const deleteOne = async (req, res) => {
    const barcode = req.params.barcode;
    try {
        const result = await ProductDAO.deleteOne(barcode);
        if (result) {
            res.json({ result });
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Server unavailable" });
    }
};


export default productsController;
