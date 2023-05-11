const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use((request, response, next) => {
  console.log(`${request.method}:${request.url}`);
  next();
});

app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`));

const groceryList = [
  {
    item: "milk",
    quantity: 2,
  },
  {
    item: "tomato",
    quantity: 1,
  },
  {
    item: "rice",
    quantity: 1,
  },
];

app.get("/groceries", (request, response) => {
  response.send(groceryList);
});

app.post("/groceries", (request, response, next) => {
  console.log(request.body);
  groceryList.push(request.body);
  response.send(201);
});
