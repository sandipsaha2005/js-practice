const value = { results: [], error: [] };

const createTask = (name, delay, shouldFail = false) => {
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) reject(new Error(name + " failed"));
        else resolve(name + " done");
      }, delay);
    });
};

const tasks = [
  createTask("A", 300),
  createTask("B", 100, true),
  createTask("C", 100),
];

const executePrallelTasks = async (tasks) => {
  const x = await Promise.allSettled(tasks.map((t) => t()));

  x.forEach((y) => {
    if (y.status === "fulfilled") {
      value.results.push(y.value);
    } else {
      value.error.push(y.reason.message);
    }
  });
};

await executePrallelTasks(tasks);
console.log(value);
