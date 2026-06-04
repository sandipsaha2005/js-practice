const getALlStreams = async (files) =>
  await Promise.all(
    files.map(async (f) => (await Deno.open(f)).readable),
  );

export const getFileStream = async (files) => {
  const streams = await getALlStreams(files);

  return new ReadableStream({
    async start(controller) {
      for (const stream of streams) {
        const reader = stream.getReader();

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          controller.enqueue(value);
        }
      }
      controller.close();
    },
  });
};
