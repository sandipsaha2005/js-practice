#!/usr/bin/env -S deno run

const name = Deno.args[0] ?? "World";
console.log(`Hello, ${name}! 👋`);
