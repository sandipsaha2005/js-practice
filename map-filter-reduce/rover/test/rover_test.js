import { executeInstructions } from "../src/index.js";
import { assertEquals } from "jsr:@std/assert";

Deno.test("A simple test", () => {
  assertEquals(executeInstructions("10 10 0 0", "0 0 N", "M"), "0 1 N");
});

Deno.test("A simple test multiple movement", () => {
  assertEquals(executeInstructions("10 10 0 0", "0 0 N", "MM"), "0 2 N");
});

Deno.test("For empty direction", () => {
  assertEquals(executeInstructions("10 10 0 0", "0 0 N", ""), "0 0 N");
});

Deno.test("For empty directioin not starting from 0 0", () => {
  assertEquals(executeInstructions("10 10 0 0", "4 7 N", ""), "4 7 N");
});

Deno.test("A turning test", () => {
  assertEquals(executeInstructions("10 10 0 0", "0 0 E", "L"), "0 0 N");
});

Deno.test("Given test", () => {
  assertEquals(executeInstructions("10 10 0 0", "0 0 E", "LMRMMMR"), "3 1 S");
});

Deno.test("One move two direction change", () => {
  assertEquals(executeInstructions("10 10 0 0", "0 0 E", "LMR"), "0 1 E");
});

Deno.test("Just changing directions", () => {
  assertEquals(executeInstructions("10 10 0 0", "0 0 E", "RL"), "0 0 E");
});

Deno.test("Just changing directions cuircular way", () => {
  assertEquals(executeInstructions("10 10 0 0", "0 0 E", "RLLLRRLLL"), "0 0 S");
});

Deno.test("Zig zag turn and movement", () => {
  assertEquals(executeInstructions("10 10 0 0", "0 0 E", "LMRM"), "1 1 E");
});

Deno.test("Zig zag turn and movement starting point is not 0 0", () => {
  assertEquals(executeInstructions("10 10 0 0", "3 2 E", "LMRM"), "4 3 E");
});

Deno.test(
  "Continious movement and changing directions at the end",
  () => {
    assertEquals(executeInstructions("10 10 0 0", "0 0 E", "MMML"), "3 0 N");
  },
);

Deno.test("Moving after changing directions", () => {
  assertEquals(
    executeInstructions("10 10 0 0", "0 0 E", "RMLLLMRRMLLLM"),
    "0 -2 S",
  );
});

console.log("Last run at", new Date().toLocaleString());
