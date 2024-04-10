import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    barcode: {
        type: String,
        unique: true,
        required: true
    },
    description: String,
    brand: String,
    price: Number,
    cost: Number,
    stock: Number,
    expiredDate: String,
    status: Number
}, {
    versionKey: false, // para que no se inserte en los documentos
    timestamps: true // para que se añadan automáticamente los campos createdAt y updatedAt
});

export default model('Product', productSchema);
