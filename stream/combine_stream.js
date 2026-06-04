const myStrem = new ReadableStream({
  start(controller) {
    controller.enqueue(new TextEncoder().encode("hello"));
    controller.close();
  },
});

const myWritable = new WritableStream({
  write(chunk) {
    Deno.stdout.write(chunk);
  },
});

await myStrem.pipeTo(myWritable);
