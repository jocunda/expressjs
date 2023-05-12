const { Router } = require("express");

const router = Router();

const supermarkets = [
  {
    id: 1,
    store: "Walmart",
    miles: 0.6,
  },
  {
    id: 2,
    store: "Fairprice",
    miles: 2.5,
  },
  {
    id: 3,
    store: "Costco",
    miles: 2.8,
  },
  {
    id: 4,
    store: "Giant",
    miles: 3.5,
  },
  {
    id: 5,
    store: "Kaisar",
    miles: 1.8,
  },
];

router.get("", (request, response) => {
  const { miles } = request.query;
  const parsedMiles = parseInt(miles);
  if (!isNaN(parsedMiles)) {
    const filterStores = supermarkets.filter((s) => s.miles <= parsedMiles);
    response.send(filterStores);
  } else response.send(supermarkets);
});

module.exports = router;
