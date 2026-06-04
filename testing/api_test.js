import { assertEquals } from "jsr:@std/assert";

Deno.test.ignore("async test example", async () => {
  const response = await fetch("https://deno.land");
  assertEquals(response.ok, true);
});
