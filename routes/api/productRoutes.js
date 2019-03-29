const express = require("express");
const router = express.Router();
const product_controller = require("../../controllers/productController");
const { check } = require("express-validator/check");

// GET request for products by category
router.get("/category/:category.:limit.:page", product_controller.get_products_by_category);

// GET request for product by id
router.get("/:id", product_controller.get_product_by_id);

// GET request for product search
router.get("/search/:searchQuery/:limit/:page", product_controller.get_products_by_search_query);

module.exports = router;