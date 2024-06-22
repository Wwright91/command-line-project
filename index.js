const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { create, index, show } = require("./src/groceriesController");

const inform = console.log;

function run() {
  const action = process.argv[2];
  const grocery = process.argv[3];
  let groceryProducts = readJSONFile("./data", "groceries.json");
  let writeToFile = false;
  let updatedGroceryList = [];

  switch (action) {
    case "index":
      inform(index(groceryProducts));
      break;
    case "create":
      updatedGroceryList = create(groceryProducts, process.argv.slice(3));
      inform("Item created");
      writeToFile = true;
      break;
    case "show":
      inform(show(groceryProducts, grocery));
      break;
    case "update":
      inform(action, grocery);
      break;
    case "destroy":
      inform(action, grocery);
      break;
    default:
      inform("There was an error.");
  }
  if (writeToFile) {
    writeJSONFile("./data", "groceries.json", updatedGroceryList);
  }
}
run();
