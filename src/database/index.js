const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/expressjs_tutorial", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.error("Error connecting to DB:", error));
