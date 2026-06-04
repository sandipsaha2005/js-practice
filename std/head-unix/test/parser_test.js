import { assertEquals } from "@std/assert";
import { parser } from "../src/parser.js";

Deno.test("Simple valid input with -n", () => {
  assertEquals(parser(["-n", "10", "poem"]), {
    mode: "-n",
    count: 10,
    quiteMode: true,
    files: ["poem"],
  });
});

Deno.test("Simple valid input with -c", () => {
  assertEquals(parser(["-c", "10", "poem"]), {
    mode: "-c",
    count: 10,
    quiteMode: true,
    files: ["poem"],
  });
});

Deno.test("For invalid option name", () => {
  assertEquals(parser(["-a", "10", "poem"]), {
    mode: "-n",
    count: 10,
    quiteMode: false,
    files: [],
    isError: true,
    errorMessage: "head: illegal option -- -a",
  });
});

Deno.test("For invalid argument for option -n", () => {
  assertEquals(parser(["-n", "ab", "poem"]), {
    mode: "-n",
    count: 10,
    quiteMode: false,
    files: [],
    isError: true,
    errorMessage: "head: illegal line count -- ab",
  });
});

Deno.test("For invalid argument for option -c", () => {
  assertEquals(parser(["-c", "ab", "poem"]), {
    mode: "-c",
    count: 10,
    quiteMode: false,
    files: [],
    isError: true,
    errorMessage: "head: illegal byte count -- ab",
  });
});

Deno.test("For not giving argument after option -c", () => {
  assertEquals(parser(["-c"]), {
    mode: "-c",
    count: 10,
    quiteMode: false,
    files: [],
    isError: true,
    errorMessage: "head: option requires an argument -- -c",
  });
});

Deno.test("For not giving argument after option -n", () => {
  assertEquals(parser(["-n"]), {
    mode: "-n",
    count: 10,
    quiteMode: false,
    files: [],
    isError: true,
    errorMessage: "head: option requires an argument -- -n",
  });
});

Deno.test("Over writing option -n with -c", () => {
  assertEquals(parser(["-n", "10", "number.txt", "-c", "4"]), {
    mode: "-c",
    count: 4,
    quiteMode: true,
    files: ["number.txt"],
  });
});

Deno.test("Over writing option -c with -n", () => {
  assertEquals(parser(["-c", "10", "number.txt", "-n", "4"]), {
    mode: "-n",
    count: 4,
    quiteMode: true,
    files: ["number.txt"],
  });
});

Deno.test("Without giving any options and arguments", () => {
  assertEquals(parser(["number.txt"]), {
    mode: "-n",
    count: 10,
    quiteMode: true,
    files: ["number.txt"],
  });
});

Deno.test("Option -c without giving any filename", () => {
  assertEquals(parser(["-c", "10"]), {
    mode: "-c",
    count: 10,
    quiteMode: true,
    files: [],
  });
});

Deno.test("Option -n without giving any filename", () => {
  assertEquals(parser(["-n", "10"]), {
    mode: "-n",
    count: 10,
    quiteMode: true,
    files: [],
  });
});

Deno.test("Having multiple fiels", () => {
  assertEquals(
    parser(["-n", "10", "poem.txt", "poem1.txt", "poem2.txt", "poem3.txt"]),
    {
      mode: "-n",
      count: 10,
      quiteMode: false,
      files: ["poem.txt", "poem1.txt", "poem2.txt", "poem3.txt"],
    },
  );
});

Deno.test("Adding supress mode with -n", () => {
  assertEquals(
    parser([
      "-q",
      "-n",
      "10",
      "poem.txt",
      "poem1.txt",
      "poem2.txt",
      "poem3.txt",
    ]),
    {
      mode: "-n",
      count: 10,
      quiteMode: true,
      files: ["poem.txt", "poem1.txt", "poem2.txt", "poem3.txt"],
    },
  );
});

Deno.test("Adding supress mode with -c", () => {
  assertEquals(
    parser([
      "-q",
      "-c",
      "10",
      "poem.txt",
      "poem1.txt",
      "poem2.txt",
      "poem3.txt",
    ]),
    {
      mode: "-c",
      count: 10,
      quiteMode: true,
      files: ["poem.txt", "poem1.txt", "poem2.txt", "poem3.txt"],
    },
  );
});
