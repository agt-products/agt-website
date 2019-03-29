const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");

// Express App
const app = express();

// Logging
app.use(logger("dev"));

// Bodyparser Middleware
app.use(bodyParser.json());

// MongoDB
const db = require("./config/keys").agtURI;
mongoose.Promise = require("bluebird");
mongoose.connect(db, {
    promiseLibrary: require("bluebird"),
    useNewUrlParser: true
})
.then(() => console.log("MongoDB connected!"))
.catch((err) => console.error(err));

// API Routes
app.use("/api/users", require("./routes/api/userRoutes"));
app.use("/api/products", require("./routes/api/productRoutes"));
app.use("/api/projects", require("./routes/api/projectRoutes"));
app.use("/api/quote-requests", require("./routes/api/quoteRequestRoutes"));

module.exports = app;