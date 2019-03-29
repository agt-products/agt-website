const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/config");

/**
 * @route   POST api/users/register
 * @desc    Post a new User
 * @access  Public
 */
exports.user_register = function(req, res) {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPassword
    });

    User.add(newUser, (err, user) => {
        if(err) {
            return res.status(500).send("There was a problem registering the user.");
        }

        let token = jwt.sign({id: user._id}, config.web.secret, {
            expiresIn: 86400
        });

        res.status(200).send({auth: true, token: token});
    });
}

/**
 * @route   GET api/users/token
 * @desc    Get a User token
 * @access  Public
 */
exports.user_token = function(req, res) {
    User.getById(req.userId, function(err, user) {
        if(err) {
            return res.status(500).send("There was a problem finding the user.");
        }

        if(!user) {
            return res.status(404).send("No user found.");
        }

        res.status(200).send({firstName: user.firstName, lastName: user.lastName, email: user.email, phone: user.phone});
    })
}

/**
 * @route   POST api/users/login
 * @desc    User login
 * @access  Public
 */
exports.user_login = function(req, res) {
    User.getByEmail(req.body.email, function(err, user) {
        if(err) {
            return res.status(500).send("Error on server.");
        }
        if(!user) {
            return res.status(404).send("No user found.");
        }

        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if(!passwordIsValid) {
            return res.status(401).send({auth: false, token: null});
        }

        let token = jwt.sign({ id: user._id }, config.web.secret, {
            expiresIn: 86400
        });

        res.status(200).send({auth: true, token: token});
    })
}

/**
 * @route   GET api/users/logout
 * @desc    User logout
 * @access  Public
 */
exports.user_logout = function(req, res) {
    res.status(200).send({auth: false, token: null});
}

/**
 * @route   PATCH api/users/update
 * @desc    Update user account info.
 * @access  Public
 */

exports.update_user_account_info1 = function(req, res, next) {
    User.getById(req.userId, function(err, user) {
        if(err) {
            return res.status(500).send("Error on server.");
        }
        if(!user) {
            return res.status(404).send("No user found.");
        }

        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if(!passwordIsValid) {
            return res.status(401).send("Incorrect password.");
        }

        req.userId = user._id;
        req.updates = req.body.updates;
        next();
    });
}

exports.update_user_account_info2 = function(req, res) {
    User.updateUserAccountInfo(req.userId, req.updates, function(err, updatedUser) {
        if(err) return res.status(500).send("There was an error updating your account information.");

        let updatedInfo = {
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            phone: updatedUser.phone,
        }

        res.status(200).send(updatedInfo);
    });
}

/**
 * @route   GET api/users/cart
 * @desc    Get user quote cart
 * @access  Public
 */
exports.get_quote_cart = function(req, res) {
    User.getById(req.userId, function(err, user) {
        if(err) {
            return res.status(500).send("There was a problem finding the user.");
        }

        if(!user) {
            return res.status(404).send("No user found.");
        }

        res.status(200).send(user.cart);
    })
}

/**
 * @route   PATCH api/users/cart/add
 * @desc    Add item to quote cart
 * @access  Public
 */
exports.add_item_to_quote_cart = function(req, res) {
    User.addItemToQuoteCart(req.userId, req.body, function(err, user) {
        if(err) {
            return res.status(500).send("Error on server.");
        }
        if(!user) {
            return res.status(404).send("No user found.");
        }

        return res.status(200).send(user.cart);
    })
}

/**
 * @route   PATCH api/users/cart/remove
 * @desc    Remove item from quote cart
 * @access  Public
 */
exports.remove_item_from_quote_cart = function(req, res) {
    User.removeItemFromQuoteCart(req.userId, req.body, function(err, user) {
        if(err) {
            return res.status(500).send("Error on server.");
        }
        if(!user) {
            return res.status(404).send("No user found.");
        }

        return res.status(200).send(user.cart);
    })
}

/**
 * @route   PATCH api/users/cart/comment
 * @desc    Add or update quote cart item comment
 * @access  Public
 */
exports.update_item_in_quote_cart = function(req, res) {
    User.updateItemInQuoteCart(req.userId, req.body, function(err, user) {
        if(err) {
            return res.status(500).send("Error on server.");
        }
        if(!user) {
            return res.status(404).send("No user found.");
        }

        return res.status(200).send(user.cart);
    })
}

/**
 * @route   POST api/users/cart/clear
 * @desc    Post request to clear all items out of a quote cart
 * @access  Public
 */
exports.clear_quote_cart = function(req, res) {
    User.clearQuoteCart(req.userId, function(err) {
        if(err) return res.status(500).send("Error on server.");

        return res.status(200).send({ success: true });
    });
}