const express = require("express");
const cors = require("cors");
const tourProduct = require("./routes/v1/tour.route");
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use('/api/v1/tour',tourProduct)

// root route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Tour Management Server Running" });
});

// by default route
app.get("*", (req, res) => {
  res.status(404).send({ message: "Route Not Found" });
});

module.exports = app;
