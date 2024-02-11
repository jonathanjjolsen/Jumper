const { model, Schema } = require ('mongoose');

const productSchema = new Schema({
    category: String,
    name: String,
    code: String,
});

module.exports = model('Product', productSchema)
