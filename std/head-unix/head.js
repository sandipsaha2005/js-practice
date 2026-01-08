import { parser } from "./src/parser.js";
import { writeToStderr, writeToStdout } from "./src/writer.js";

const head = (args) => {
  const data = parser(args);
  if (data.isError) {
    writeToStderr(data.errorMessage);
    return;
  }
  if (data.count === 0) {
    writeToStdout("");
    return;
  }

  /// read files or read stdin
};

head(Deno.args);
