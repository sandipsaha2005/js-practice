import { executeRecipe } from "./src/execute_flow.js";
import { store } from "./src/store.js";

const main = () => {
  Deno.readTextFile("./data/flow.txt")
    .then(executeRecipe)
    .then((logs) => console.log("Logs generated") || logs)
    .then(store)
    .then(() => console.log("Logs stored"))
    .catch((err) => console.error(err));
};
main(); 
