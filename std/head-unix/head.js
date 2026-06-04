import { parser } from "./src/parser.js";
import { getFileStream } from "./src/file.js";
import { cutter } from "./src/transformer.js";
import { writeToStdout } from "./src/writer.js";

const head = async (args, writeFunc = writeToStdout) => {
  const data = parser(args);

  if (data.isError) {
    writeFunc(data.errorMessage);
    return;
  }
  if (data.count === 0) {
    writeFunc("");
    return;
  }

  let stream;
  if (data.files.length) {
    stream = await getFileStream(data.files);
  } else {
    stream = Deno.stdin.readable;
  }

  stream
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(cutter(data))
    .pipeThrough(new TextEncoderStream())
    .pipeTo(Deno.stdout.writable);
};

head(Deno.args);
