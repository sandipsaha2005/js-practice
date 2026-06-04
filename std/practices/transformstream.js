import { parseInput } from "../../js_assignments/js-head-sandipsaha2005/src/parser.js";
import { TextLineStream } from "jsr:@std/streams/text-line-stream";

const headLine = (count) => {
  const limit = Number(count);
  let current = 0;
  console.log(limit);

  return new TransformStream({
    transform(chunk, controller) {
      console.log(chunk);

      if (current >= limit) {
        controller.terminate();
      }
      controller.enqueue(chunk);
      current++;
    },
  });
};

const main = (args) => {
  const { count } = pareseInput(args);

  Deno.stdin.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream())
    .pipeThrough(headLine(count))
    .pipeThrough(new TextEncoderStream())
    .pipeTo(Deno.stdout.writable);
};

main(Deno.args);
