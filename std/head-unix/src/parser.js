class Scanner {
  constructor(list) {
    this.queue = list;
  }
  peek() {
    return this.queue[0];
  }
  dequeue() {
    return this.queue.shift();
  }
}

const needArguments = {
  "-q": false,
  "-n": true,
  "-c": true,
};

const validOptions = new Set(["-q", "-n", "-c"]);

const updateGroup = (queue, group) => {
  const option = queue.dequeue();
  const specifier = option === "-n" ? "line" : "byte";

  if (option === "-q") {
    group.quiteMode = true;
    return;
  }
  group.mode = option;

  if (needArguments[option]) {
    if (!queue.peek()) {
      throw new Error(`head: option requires an argument -- ${option}`);
    }

    const actualArg = queue.dequeue();
    const arg = Number(actualArg);
    if (Number.isNaN(arg)) {
      throw new TypeError(`head: illegal ${specifier} count -- ${actualArg}`);
    }

    group.count = arg;
  }
};

const parse = (q, group) => {
  while (q.peek()) {
    const current = q.peek();

    if (current.startsWith("-") && !validOptions.has(current)) {
      throw new Error(`head: illegal option -- ${current}`);
    } else if (validOptions.has(current)) {
      updateGroup(q, group);
    } else {
      group.files.push(q.dequeue());
    }
  }
};

export const parser = (args) => {
  const scanner = new Scanner(args);

  const group = {
    mode: "-n",
    count: 10,
    quiteMode: false,
    files: [],
  };

  try {
    parse(scanner, group);
  } catch (error) {
    return {
      ...group,
      isError: true,
      errorMessage: error.message,
    };
  }

  if (group.files.length <= 1) {
    group.quiteMode = true;
  }
  return group;
};
