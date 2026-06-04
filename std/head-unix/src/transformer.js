const optionN = (buffer, limit, controller) => {
  const lines = buffer.split("\n");
  buffer = lines.pop();

  for (const line of lines) {
    if (limit <= 0) {
      controller.terminate();
      return;
    }
    controller.enqueue(line + "\n");
    limit--;
  }

  return buffer;
};

const optionC = (buffer, limit, controller) => {
};

const options = {
  "-c": optionC,
  "-n": optionN,
};

export const cutter = ({ count, mode, quiteMode }) => {
  return new TransformStream({
    start() {
      this.limit = count;
      this.lineCount = 0;
      this.byteCount = 0;
      this.buffer = "";
    },

    transform(chunk, controller) {
      this.buffer += chunk;
      this.buffer = options[mode](this.buffer, this.limit, controller);
    },
  });
};
