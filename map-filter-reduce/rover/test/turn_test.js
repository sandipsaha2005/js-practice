import { executeInstructions, turn } from "../src/index.js";
import { assertEquals } from "jsr:@std/assert";

Deno.test("left turn from N to W", () => {
  assertEquals(turn({ x: 0, y: 1, direction: "N" }, -1), {
    direction: "W",
    x: 0,
    y: 1,
  });
});

Deno.test("left turn from W to S", () => {
  assertEquals(turn({ x: 0, y: 1, direction: "W" }, -1), {
    direction: "S",
    x: 0,
    y: 1,
  });
});

Deno.test("left turn from S to E", () => {
  assertEquals(turn({ x: 0, y: 1, direction: "S" }, -1), {
    direction: "E",
    x: 0,
    y: 1,
  });
});

Deno.test("left turn from E to N", () => {
  assertEquals(turn({ x: 0, y: 1, direction: "E" }, -1), {
    direction: "N",
    x: 0,
    y: 1,
  });
});

Deno.test("right turn from E to S", () => {
  assertEquals(turn({ x: 0, y: 1, direction: "E" }, 1), {
    direction: "S",
    x: 0,
    y: 1,
  });
});

Deno.test("right turn from S to W", () => {
  assertEquals(turn({ x: 0, y: 1, direction: "S" }, 1), {
    direction: "W",
    x: 0,
    y: 1,
  });
});

Deno.test("right turn from W to N", () => {
  assertEquals(turn({ x: 0, y: 1, direction: "W" }, 1), {
    direction: "N",
    x: 0,
    y: 1,
  });
});

Deno.test("right turn from N to E", () => {
  assertEquals(turn({ x: 0, y: 1, direction: "N" }, 1), {
    direction: "E",
    x: 0,
    y: 1,
  });
});
