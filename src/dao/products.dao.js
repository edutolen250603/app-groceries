// products.dao.js
import Product from '../models/products.model.js';

const ProductDAO = {};

ProductDAO.getAll = async () => { 
    const products = await Product.find(); 
    return products; 
};

ProductDAO.getOne = async (barcode) => {
    const product = await Product.findOne({ barcode: barcode }); 
    return product; 
};

ProductDAO.insertOne = async (product) => {
    return await Product.create(product); 
};

ProductDAO.updateOne = async (barcode, product) => {
    return await Product.findOneAndUpdate({ barcode: barcode }, product); 
};

ProductDAO.deleteOne = async (barcode) => {
    return await Product.findOneAndDelete({ barcode: barcode }); 
};

export default ProductDAO;
