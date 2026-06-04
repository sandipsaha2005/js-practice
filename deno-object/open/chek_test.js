import { assertEquals } from "jsr:@std/assert";
Deno.test("testing steps", async (t) => {
  const file = await Deno.open("test.txt", {
    read: true,
    write: true,
    create: true,
  });
  const encoder = new TextEncoder();
  const data = encoder.encode("Hello world!");

  await t.step("write some bytes", async () => {
    const bytesWritten = await file.write(data);
    assertEquals(bytesWritten, data.length);
    await file.seek(0, Deno.SeekMode.Start);
  });

  await t.step("read some bytes", async () => {
    const buffer = new Uint8Array(data.length);
    await file.read(buffer);
    assertEquals(buffer, data);
  });

  file.close();
});

Deno.test({
  name: "leaky test",
  async fn() {
    await Deno.open("test.txt");
  },
  sanitizeResources: false,
});

Deno.test("test", async (t) => {
  await t.step("first", async (i) => {
    assertEquals(1, 1);
    await i.step("inside first", async (ii) => {
      assertEquals(1, 1);
      await ii.step("inside inner", () => {
        assertEquals(1, 1);
      });
    });
  });
  await t.step("second", () => {
    assertEquals(1, 1);
  });
});
