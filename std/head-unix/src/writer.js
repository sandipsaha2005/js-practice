const encoder = new TextEncoder();

export const writeToStdout = async (data) => {
  await Deno.stdout.write(encoder.encode(data));
};

export const writeToStderr = async (data) => {
  await Deno.stderr.write(encoder.encode(data));
};

