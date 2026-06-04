import { LoremIpsum } from "npm:lorem-ipsum";

const decoder = new TextDecoder();
const encoder = new TextEncoder();

const test = async () => {
  const x = await Deno.open("../data/poem.txt", { read: true });

  const customSizeBuffer = new Uint8Array(10);
  const byte = await x.read(customSizeBuffer);
  console.log(customSizeBuffer);
  console.log(new TextDecoder().decode(customSizeBuffer));
};

const readable = async () => {
  const file = await Deno.open("../data/poem.txt", { read: true });

  for await (const element of file.readable) {
    console.log(element);

    console.log(decoder.decode(element));
  }
};

const writable = async () => {
  const file = await Deno.open("test.txt", {
    read: true,
    write: true,
    create: true,
  });

  const data = ["hello", " ", "world"];
  const writer = file.writable.getWriter();

  for (const d of data) {
    await writer.write(encoder.encode(d));
  }

  await file.sync();
  await file.seek(0, Deno.SeekMode.Start);

  const r2 = await file.readable.getReader();
  const content = await r2.read();
  console.log({ content: decoder.decode(content.value) });

  r2.releaseLock();
  file.close();
};

const readingEdgeCase = async () => {
  const file = await Deno.open("test.txt", {
    read: true,
    write: true,
    create: true,
  });

  const r1 = await file.readable.getReader();
  const content1 = await r1.read();
  console.log({ content1: decoder.decode(content1.value) });

  // for await (const element of file.readable) {
  //   console.log(decoder.decode(element));
  // }

  // console.log(file.readable);
  // while (true) {
  //   const { value, done } = await r1.read();
  //   console.log(decoder.decode(value));

  //   if (done) break;
  // }
  // console.log(await r1.read());
  // if i read a stream using for of it works internally kind of the while loop written above
  // that means untill done is true it reads. And done true means the stream is totally consumed. You can't use it anymore.

  await r1.releaseLock();
  await file.seek(0, Deno.SeekMode.Start);

  const r2 = await file.readable.getReader();
  const content = await r2.read();
  console.log({ content: decoder.decode(content.value) });
};

// Fs.File

const read = async (bufferSize = 5) => {
  const file = await Deno.open("test.txt", { read: true });

  const buffer = new Uint8Array(bufferSize);

  while (await file.read(buffer)) {
    console.log(decoder.decode(buffer));
  }

  // let x = await file.read(buffer);
  // console.log({ buffer, x, actual: decoder.decode(buffer) });

  // x = await file.read(buffer);
  // console.log({ buffer, x, actual: decoder.decode(buffer) });

  // x = await file.read(buffer);
  // console.log({ buffer, x, actual: decoder.decode(buffer) });

  // x = await file.read(buffer);
  // console.log({ buffer, x, actual: decoder.decode(buffer) });

  // x = await file.read(buffer);
  // console.log({ buffer, x, actual: decoder.decode(buffer) });

  // x = await file.read(buffer);
  // console.log({ buffer, x, actual: decoder.decode(buffer) });

  // x = await file.read(buffer);
  // console.log({ buffer, x, actual: decoder.decode(buffer) });

  // x = await file.read(buffer);
  // console.log({ buffer, x, actual: decoder.decode(buffer) });
};

const raw = async (no = 2) => {
  const tty = await Deno.open("/dev/tty", { read: true, write: true });
  const writer = await Deno.stdout.writable.getWriter();
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      min: 1,
      max: 1,
    },
    wordsPerSentence: {
      min: 4,
      max: 9,
    },
  });

  const passage = lorem.generateParagraphs(1);
  console.log(passage);

  let i = 0;
  try {
    tty.setRaw(true, { cbreak: true });
    const buffer = new Uint8Array([0]);
    while (true) {
      await tty.read(buffer);
      if (buffer[0] === 127) {
        await writer.write(encoder.encode("\b \b"));
        i--;
        continue;
      }

      if (buffer[0] === 13) break;

      const decoded = decoder.decode(buffer);
      if (decoded !== passage[i]) {
        await writer.write(
          encoder.encode(`\x1b[31m${decoded}\x1b[0m`),
        );
      } else {
        await writer.write(
          encoder.encode(decoded),
        );
      }
      i++;
      if (i === passage.length) {
        break;
      }
    }
  } catch (error) {
    console.log(error.message);
    tty.setRaw(false);
    tty.close();
  } finally {
    tty.setRaw(false);
    tty.close();
  }
};

const sync = async () => {
  const file = await Deno.open(
    "test.txt",
    { read: true, write: true, create: true },
  );

  await file.write(
    new TextEncoder().encode(
      "Hello World\nHello World\nHello World\nHello World\nHello World\n",
    ),
  );
  await file.sync();

  await file.seek(0, Deno.SeekMode.Start);
  const reader = file.readable.getReader();
  const writer = Deno.stdout.writable.getWriter();
  // read all contents
  // const buffer = new Uint8Array(23);
  // while (true) {
  //   const n = await file.read(buffer);
  //   if (n === null) break;
  //   console.log(decoder.decode(buffer));
  // }

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    await writer.write(value);
  }
};

const truncate = async () => {
  const file = await Deno.open(
    "test.txt",
    { read: true, write: true, create: true },
  );

  await file.write(
    new TextEncoder().encode(
      "Hello World\nHello World\nHello World\nHello World\nHello World\n",
    ),
  );

  await file.sync();

  await file.truncate(7);
  await file.seek(0, Deno.SeekMode.Start);
  const reader = file.readable.getReader();
  const writer = Deno.stdout.writable.getWriter();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    await writer.write(value);
  }
};

raw();
