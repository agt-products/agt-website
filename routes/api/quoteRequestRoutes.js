const express = require("express");
const router = express.Router();
const checkToken = require("../../config/checkToken");
const quoteRequestController = require("../../controllers/quoteRequestController");

// POST request for submitting a quote request
router.post("/", checkToken, [quoteRequestController.submit_quote_request1, quoteRequestController.submit_quote_request2]);

// GET request for all quote requests submitted by a particiular user.
router.get("/by-user", checkToken, quoteRequestController.get_quote_requests_by_user_id);

module.exports = router;