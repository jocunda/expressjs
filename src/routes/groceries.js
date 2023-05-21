const { Router, response } = require("express");

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

router.use((request, response, next) => {
  console.log("Inside groceries Auth check middleware");
  console.log(request.user);
  if (request.user) next();
  else response.send(401);
});

router.get("/", (request, response) => {
  response.cookie("visited", true, { maxAge: 60000 });
  response.send(groceryList);
});

router.get("/:item", (request, response) => {
  console.log(request.cookies);
  const { item } = request.params;
  const groceryItem = groceryList.find((g) => g.item === item);
  response.send(groceryItem);
});

router.post("/", (request, response, next) => {
  console.log(request.body);
  groceryList.push(request.body);
  response.send(201);
});

router.get("/shopping/cart", (request, response) => {
  const { cart } = request.session;
  if (!cart) {
    response.send("You have no cart session");
  } else {
    response.send(cart);
  }
});

router.post("/shopping/cart/item", (request, response) => {
  const { items, quantity } = request.body;
  const cartItem = { items, quantity };
  const { cart } = request.session;
  if (cart) {
    request.session.cart.items.push(cartItem);
  } else {
    request.session.cart = {
      items: [cartItem],
    };
  }
  response.send(201);
});

module.exports = router;
