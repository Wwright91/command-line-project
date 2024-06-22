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

module.exports = { create };
