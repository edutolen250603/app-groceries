import Product from '../models/products.model.js';

const productDAO = {};

productDAO.getAll = async () => { 
    const products = await Product.find(); // Buscamos todos los productos en la base de datos
    return products; // Retornamos los productos encontrados
};

productDAO.getOne = async (barcode) => {
    const product = await Product.findOne({ barcode: barcode }); // Buscamos un producto por su código de barras
    return product; // Retornamos el producto encontrado
};

productDAO.insertOne = async (product) => {
    return await Product.create(product); // Insertamos un nuevo producto en la base de datos
};

productDAO.updateOne = async (barcode, product) => {
    return await Product.findOneAndUpdate({ barcode: barcode }, product); // Actualizamos un producto existente por su código de barras
};

productDAO.deleteOne = async (barcode) => {
    return await Product.findOneAndDelete({ barcode: barcode }); // Eliminamos un producto por su código de barras
};

export default productDAO;
