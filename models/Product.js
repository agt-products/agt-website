const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Product Schema
const ProductSchema = new Schema({
    product_id: {
        type: Number,
        required: true
    },
    series: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    categories: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: false
    },
    desc_list: {
        type: [String],
        required: false
    }
});

//ProductSchema.index({ series: "text", categories: "text", name: "text", desc_list: "text", description: "text"}, { weights: { series: 5, name: 4, categories: 3, desc_list: 2, description: 1 } });

module.exports = Product = mongoose.model("Product", ProductSchema);

module.exports.getByProductId = (prod_id, callback) => {
    let query = {product_id: prod_id};
    Product.findOne(query, callback);
}

module.exports.getByCategory = (params, callback) => {
    let limit = parseInt(params.limit);
    let skip = parseInt(params.page) * limit;
    let query = {categories: "/" + params.category.replace(/&/g, "/")};
    let fields = {"product_id": 1, "series": 1, "name": 1, "images": 1};

    Product.find(query, fields, (err, products) => {
        products.sort(function(a, b) {
            if(a.product_id > b.product_id) {
                return 1;
            }
            else if(a.product_id < b.product_id) {
                return -1;
            }

            return 0;
        });
        let productCount = products.length;
        let productResults = products.slice(skip, skip + limit);
        callback(err, {
            productCount: productCount,
            products: productResults
        });
    });
}

module.exports.getBySearch = (params, callback) => {
    let limit = parseInt(params.limit);
    let skip = parseInt(params.page) * limit;
    let query = { $text: { $search: params.searchQuery } };

    Product.find(query, { score: { $meta: "textScore" } }, (err, products) => {
        products.sort(function(a, b) {
            if(a["_doc"].score < b["_doc"].score) {
                return 1;
            }
            else if(a["_doc"].score > b["_doc"].score) {
                return -1;
            }

            return 0;
        });
        let productCount = products.length;
        let productResults = products.slice(skip, skip + limit);
        callback(err, {
            productCount: productCount,
            products: productResults
        });
    });
}