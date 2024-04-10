import express from 'express';
import morgan from 'morgan';
import productsRouter from './routes/products.routes.js';

const app = express();

// Configuración del motor de vistas (no se utilizará en respuestas JSON)
app.set('view engine', 'ejs');

// Middleware para parsear JSON en las peticiones
app.use(express.json());

// Middleware para parsear datos de formularios en las peticiones
app.use(express.urlencoded({ extended: false }));

// Middleware para registrar las solicitudes en la consola (solo en desarrollo)
app.use(morgan('dev'));

// Middleware para configurar el tipo de contenido de las respuestas a JSON
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// Rutas para los productos
app.use('/api/products', productsRouter);

export default app;
