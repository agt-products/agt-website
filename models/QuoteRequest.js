const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// QuoteRequest Schema
const QuoteRequestSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    requestDate: {
        type: Date,
        required: true
    }
});

module.exports = QuoteRequest = mongoose.model("QuoteRequest", QuoteRequestSchema);

module.exports.submitQuoteRequest = (quoteRequest, callback) => {
    quoteRequest.save(callback);
}

module.exports.getQuoteRequestsByUserId = (userId, callback) => {
    let query = { userId: userId };
    let fields = {"products": 1, "requestDate": 1};
    QuoteRequest.find(query, fields, callback);
}