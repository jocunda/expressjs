const { Router } = require("express");

const router = Router();

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

router.get("/", (request, response) => {
  response.send(groceryList);
});

router.get("/:item", (request, response) => {
  const { item } = request.params;
  const groceryItem = groceryList.find((g) => g.item === item);
  response.send(groceryItem);
});

router.post("/", (request, response, next) => {
  console.log(request.body);
  groceryList.push(request.body);
  response.send(201);
});

module.exports = router;
