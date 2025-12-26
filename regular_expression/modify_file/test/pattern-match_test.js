import { assertEquals } from "jsr:@std/assert";
import { fileContent } from "../utils.js";
import { checkIfLetsReAssigned, findLets } from "../src/pattern-match.js";

Deno.test("testing file", () => {
  assertEquals(findLets(fileContent).length, 1);
});


