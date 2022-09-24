require('dotenv').config()
const app = require("./index");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => console.log(error));

app.listen(port, () => {
    console.log('Server Side Running is', port);
})