const express = require("express");
const groceriesRoute = require("./routes/groceries");
const marketsRoute = require("./routes/market");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use((request, response, next) => {
  console.log(`${request.method}:${request.url}`);
  next();
});

app.use("/groceries", groceriesRoute);
app.use("/markets", marketsRoute);

app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`));
