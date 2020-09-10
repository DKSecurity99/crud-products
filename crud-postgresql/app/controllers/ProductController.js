const db = require('../models/dbConnect');

const Product = db.product;

module.exports = {
    async listProducts(req, res){
        try {
            const data = await Product.findAll();
            res.status(200).send(data);

        } catch(error){
            res.status(500).send({ message: 'Product list error'});
        };
    },

    async listOneProduct(req, res){
        try {
            const id = req.params.id;
            
            const data = await Product.findByPk(id);
            res.status(200).send(data);

        } catch(error){
            res.status(500).send({ message: 'Product list error'});
        };
    },

    async createProduct(req, res){
        try {
            await Product.create(req.body);
            
            res.status(200).send({ message: 'Product successfully created'});

        } catch(error){
            res.status(500).send( { message: 'Product creation error'});
        };
    },

    async deleteProduct(req, res){
        try {
            const id = req.params.id;

            await Product.destroy({ where: { id }});
            res.status(200).send({message: 'Product was deleted successfully'});

        } catch(error){
            res.status(500).send({ message: 'Product deleted error'});
        };
    },

    async deleteAllProducts(req, res){
        try {
            await Product.destroy({ where: {}, truncate: false });
            res.status(200).send({message: 'Products was deleted successfully'});

        } catch(error){
            res.status(500).send({ message: 'Products deleted error'});
        };
    },

    async updateProduct(req, res){
        try {
            const id = req.params.id;

            await Product.update(req.body, { where: { id }});
            res.status(200).send({ message: "Product was update successfully"});

        } catch(error){
            res.status(500).send({ message: `Error updating product with id = ${id}`});
        };
    },
};

