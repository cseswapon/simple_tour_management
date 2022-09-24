require("dotenv").config();
const express = require("express");
const cors = require("cors");
const tourProduct = require("./routes/v1/tour.route");
const app = express();
const mongoose = require("mongoose");
// middleware
app.use(cors());
app.use(express.json());
app.use('/api/v1/tour',tourProduct)
const port = process.env.PORT || 5000;

// root route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Tour Management Server Running" });
});

// by default route
app.get("*", (req, res) => {
  res.status(404).send({ message: "Route Not Found" });
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log("Server Side Running is", port);
});

module.exports = app;
