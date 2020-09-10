const express = require('express');
const productController = require('../controllers/ProductController');

const routes = express.Router();

routes.post('/products', productController.createProduct);
routes.get('/products', productController.listProducts);
routes.get('/product/:id', productController.listOneProduct);
routes.delete('/products', productController.deleteAllProducts);
routes.delete('/product/:id', productController.deleteProduct);
routes.put('/product/:id', productController.updateProduct);

module.exports = routes;

