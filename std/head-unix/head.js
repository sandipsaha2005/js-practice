import { parser } from "./src/parser.js";

const head = (args) => {
  const data = parser(args);
  console.log(data);
};

head(Deno.args);
