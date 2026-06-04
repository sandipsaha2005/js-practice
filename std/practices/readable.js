const reader = Deno.stdin.readable.getReader();
const decoder = new TextDecoder();

// while (true) {
//   const { value, done } = await reader.read();
//   if (done) break;

//   console.log("chunk:", decoder.decode(value));
// }

const encoder = new TextEncoder();
await Deno.stderr.write(
  encoder.encode("Something went wrong\n"),
);
await Deno.stdout.write(encoder.encode("Hello stdout\n"));
