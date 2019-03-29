const Product = require("../models/Product");

/**
 * @route   GET api/products/category/:category.:limit.:page
 * @desc    Get a page of products of a particular category
 * @access  Public
 */
exports.get_products_by_category = function(req, res) {
    Product.getByCategory(req.params, function(err, products) {
        if(err) {
            return res.status(500).send("There was a problem finding the products.");
        }

        if(!products || products.products.length < 1) {
            return res.status(404).send(`There are no products in the "${req.category}" category`);
        }

        res.status(200).send(products);
    });
}

/**
 * @route   GET api/products/:id
 * @desc    Get a product by id
 * @access  Public
 */
exports.get_product_by_id = function(req, res) {
    Product.getByProductId(req.params.id, function(err, product) {
        if(err) {
            return res.status(500).send("There was a problem finding the product.");
        }

        if(!product) {
            return res.status(404).send("The requested product does not exist.");
        }

        res.status(200).send(product);
    });
}

/**
 * @route   GET api/products/search/:searchQuery/:limit/:page
 * @desc    Get search query to return relevant product results.
 * @access  Public
 */
exports.get_products_by_search_query = function(req, res) {
    Product.getBySearch(req.params, function(err, products) {
        if(err) return res.status(500).send("There was an error searching for products.");

        if(products.products.length < 1) return res.status(204).send("No products meet the search criteria.");

        res.status(200).send(products);
    });
}