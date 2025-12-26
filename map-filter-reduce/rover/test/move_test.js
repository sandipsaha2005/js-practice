import { move } from "../src/index.js";
import { assertEquals } from "jsr:@std/assert";

Deno.test("move towards north", () => {
  assertEquals(move({ x: 0, y: 1, direction: "N" }), {
    direction: "N",
    x: 0,
    y: 2,
  });
});

Deno.test("move towards east", () => {
  assertEquals(move({ x: 0, y: 1, direction: "E" }), {
    direction: "E",
    x: 1,
    y: 1,
  });
});

Deno.test("move towards west", () => {
  assertEquals(move({ x: 0, y: 1, direction: "W" }), {
    direction: "W",
    x: -1,
    y: 1,
  });
});

Deno.test("move towards south", () => {
  assertEquals(move({ x: 0, y: 1, direction: "S" }), {
    direction: "S",
    x: 0,
    y: 0,
  });
});
