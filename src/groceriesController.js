const { nanoid } = require("nanoid");

function create(groceries, groceryDetails) {
  // console.log(groceryDetails)
  const [name, priceInCents] = groceryDetails;
  const grocery = {
    name: name,
    id: nanoid(4),
    priceInCents: +priceInCents,
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

const inform = console.log;

function destroy(groceries, groceryId) {
  const index = groceries.findIndex((grocery) => grocery.id === groceryId);
  if (index > -1) {
    groceries.splice(index, 1);
    inform("grocery successfully removed from collection");
  } else {
    inform("grocery not found. No action taken");
  }
  return groceries;
}

function edit(groceries, grocerylId, organic) {
  const index = groceries.findIndex((grocery) => grocery.id === grocerylId);
  if (index > -1) {
    groceries[index].isOrganic = JSON.parse(organic);
    inform("grocery successfully updated");
    return groceries;
  } else {
    inform("grocery not found. No action taken");
    return groceries;
  }
}

module.exports = { create, index, show, destroy, edit };
