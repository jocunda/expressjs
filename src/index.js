const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const groceriesRoute = require("./routes/groceries");
const marketsRoute = require("./routes/market");
const authRoute = require("./routes/auth");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(
  session({
    secret: "QWEAJDKSNFSDNCSJFWJKERKAMADADAD",
    resave: false,
    saveUninitialized: false,
  })
);

app.use((request, response, next) => {
  console.log(`${request.method}:${request.url}`);
  next();
});

app.use("/groceries", groceriesRoute);
app.use("/markets", marketsRoute);
app.use("/auth", authRoute);

app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`));
