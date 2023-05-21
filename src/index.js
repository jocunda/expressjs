const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const mongoStore = require("connect-mongo");

//Routes
const groceriesRoute = require("./routes/groceries");
const marketsRoute = require("./routes/market");
const authRoute = require("./routes/auth");

require("./strategies/local");
require("./database");

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
    store: mongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/expressjs_tutorial",
    }),
  })
);

app.use((request, response, next) => {
  console.log(`${request.method}:${request.url}`);
  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use("/groceries", groceriesRoute);
app.use("/markets", marketsRoute);
app.use("/auth", authRoute);

app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`));
