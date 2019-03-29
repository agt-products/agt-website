const QuoteRequest = require("../models/QuoteRequest");
const User = require("../models/User");

/**
 * @route   POST api/quote-requests
 * @desc    Post a QuoteRequest
 * @access  Public
 */
exports.submit_quote_request1 = function(req, res, next) {
    User.getById(req.userId, (err, user) => {
        if(err) return res.status(500).send("There was a problem finding the user.");

        if(!user) return res.status(404).send("No user found.");

        
        req.userId = user._id;
        next();
    });
}

exports.submit_quote_request2 = function(req, res) {
    let newQuoteRequest = new QuoteRequest({
        requestDate: new Date(),
        userId: req.userId,
        products: req.body
    });

    QuoteRequest.submitQuoteRequest(newQuoteRequest, (err, quoteRequest) => {
        if(err) return res.status(500).send("There was a problem submitting the quote request");
        
        res.status(200).send(quoteRequest);
    });
}

/**
 * @route   GET api/quote-requests/by-user
 * @desc    Get all quote requests associated with a specific userId.
 * @access  Public
 */

exports.get_quote_requests_by_user_id = function(req, res) {
    QuoteRequest.getQuoteRequestsByUserId(req.userId, (err, quoteRequests) => {
        if(err) return res.status(400).send("No quote requests are available for that user.");

        res.status(200).send(quoteRequests);
    });
}