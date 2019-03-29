const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Array,
        required: false
    },
    projects: {
        type: Array,
        required: false
    }
});

module.exports = User = mongoose.model("User", UserSchema);

module.exports.add = (user, callback) => {
    user.save(callback);
}

module.exports.getById = (id, callback) => {
    let query = {_id: id};
    User.findById(query, callback);
}

module.exports.getByEmail = (e, callback) => {
    let query = {email: e};
    User.findOne(query, callback);
}

module.exports.updateUserAccountInfo = (userId, updates, callback) => {
    let query = { _id: userId };
    User.findOneAndUpdate(query, { $set: { firstName: updates.firstName, lastName: updates.lastName, email: updates.email, phone: updates.phone } }, { new: true }, callback);
}

module.exports.addItemToQuoteCart = (userId, cartItem, callback) => {
    let query = { _id: userId };
    User.findOneAndUpdate(query, { $push: { cart: cartItem } }, { new: true }, callback);
}

module.exports.removeItemFromQuoteCart = (userId, cartItem, callback) => {
    let query = { _id: userId };
    User.findOneAndUpdate(query, { $pull: { cart: cartItem } }, { new: true }, callback);
}

module.exports.updateItemInQuoteCart = (userId, params, callback) => {
    let query = { _id: userId, cart: params.cartItem };
    User.findOneAndUpdate(query, { "$set": { "cart.$": {...params.cartItem, ...params.update} } }, { new: true }, callback);
}

module.exports.clearQuoteCart = (userId, callback) => {
    let query = { _id: userId };
    User.findOneAndUpdate(query, { "$set": { "cart": [] } }, callback);
}