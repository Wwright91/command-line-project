const inform = console.log;

function run() {
  const action = process.argv[2];
  const grocery = process.argv[3];
  switch (action) {
    case "index":
      inform(action);
      break;
    case "create":
      inform(action, grocery);
      break;
    case "show":
      inform(action, grocery);
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
}
run();