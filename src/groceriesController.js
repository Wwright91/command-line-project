const { nanoid } = require("nanoid");

function create(groceries, groceryDetails) {
  // console.log(groceryDetails)
  const [name, priceInCents] = groceryDetails;
  const grocery = {
    name: name,
    id: nanoid(4),
    priceInCents: priceInCents,
    inStock: true,
    isOrganic: false,
  };
  groceries.push(grocery);
  return groceries;
}

function index(groceries) {
  return groceries.map((grocery) => grocery.id + " " + grocery.name).join("\n");
}

function show(groceries, groceryId) {
  const grocery = groceries.find((grocery) => grocery.id === groceryId);
  return grocery.id + " " + grocery.name + " $" + grocery.priceInCents/100;
}

module.exports = { create, index, show };
