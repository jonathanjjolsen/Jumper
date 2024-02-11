const Product = require('../models/Product');

module.exports = {
    Query: {
        async getProducts() {
            return await Product.find();
        }
    },
    Mutation: {
        async createProduct(_, { productInput: { category, name, code }}) {
            const newProduct = new Product({
                name: name,
                category: category,
                code: code
            });
            const res = await newProduct.save();

            return {
                id: res._id,
                ...res._doc
            };
        }
    }
};