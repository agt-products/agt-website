const express = require("express");
const router = express.Router();
const checkToken = require("../../config/checkToken");
const user_controller = require("../../controllers/userController");
const { check } = require("express-validator/check");

// POST request for registering a user
router.post("/register",
    [
        check("firstName").escape().trim(),
        check("lastName").escape().trim(),
        check("phone").escape().trim()
    ], user_controller.user_register);

// GET request for verifying user tokens
router.get("/token", checkToken, user_controller.user_token);

// POST request for user login
router.post("/login", 
    [
        check("email").isEmail().normalizeEmail()
    ], user_controller.user_login);

// GET request for user logout
router.get("/logout", user_controller.user_logout);

// GET request for user quote cart
router.get("/cart", checkToken, user_controller.get_quote_cart);

// PATCH request for updating User info.
router.patch("/update",
    [
        check("updates.firstName").escape().trim(),
        check("updates.lastName").escape().trim(),
        check("updates.phone").escape().trim()
    ]
    , checkToken, [
        user_controller.update_user_account_info1,
        user_controller.update_user_account_info2
    ]);

// PATCH request for adding items to quote cart
router.patch("/cart/add", checkToken, user_controller.add_item_to_quote_cart);

// PATCH request for deleting items from quote cart
router.patch("/cart/delete", checkToken, user_controller.remove_item_from_quote_cart);

// PATCH request for updating items in quote cart
router.patch("/cart/update", checkToken, user_controller.update_item_in_quote_cart);

// POST request for clearing all items from quote cart
router.post("/cart/clear", checkToken, user_controller.clear_quote_cart);

module.exports = router;