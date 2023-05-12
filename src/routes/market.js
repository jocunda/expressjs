const { Router } = require("express");

const router = Router();

const supermarkets = [
  {
    store: "Walmart",
  },
  {
    store: "Fairprice",
  },
  {
    store: "Costco",
  },
];

router.get("", (request, response) => {
  response.send(supermarkets);
});

module.exports = router;
