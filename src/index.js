const express = require("express");

const app = express();
const PORT = 3001;

app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`));
