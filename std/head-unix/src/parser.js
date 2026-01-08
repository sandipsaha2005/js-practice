const offSet = {
  "-n": 1,
  "-c": 1,
  "-q": 0,
};

const validOptions = new Set(["-n", "-q", "-c"]);

const isStartingWithDash = (args, i) => args[i].startsWith("-");

const isValidOption = (args, i) =>
  validOptions.has(args[i]) && isStartingWithDash(args, i);

const isArgumentMissing = (args, i) =>
  args[i + 1] === undefined && isStartingWithDash(args, i);

const updateGroup = ([flag, value], group) => {
  if (flag === "-q") {
    group.quiteMode = true;
    return;
  }

  const limit = Number(value);

  if (Number.isNaN(limit) || limit < 0) {
    const specifier = flag === "-n" ? "line" : "byte";
    throw new Error(`head: illegal ${specifier} count -- ${value}`);
  }

  group.mode = flag;
  group.count = limit;
};

export const parser = (args) => {
  const group = {
    mode: "-n",
    count: 10,
    quiteMode: false,
    files: [],
  };

  let i = 0;
  try {
    while (i < args.length) {
      if (isStartingWithDash(args, i) && !isValidOption(args, i)) {
        throw new Error(`head: illegal option -- ${args[i]}`);
      }

      if (isArgumentMissing(args, i) && args[i] !== "-q") {
        throw new Error(`head: option requires an argument -- ${args[i]}`);
      }

      if (isValidOption(args, i)) {
        updateGroup(args.slice(i, i + offSet[args[i]] + 1), group);
        i += offSet[args[i]];
      } else {
        group.files.push(args[i]);
      }

      i++;
    }
  } catch (error) {
    return {
      ...group,
      isError: true,
      errorMessage: error.message,
    };
  }

  if (group.files.length === 1 || group.files.length === 0) {
    group.quiteMode = true;
  }
  return group;
};
