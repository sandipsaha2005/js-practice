const _median = (usedCountsWithKeys) =>
  Math.floor(
    usedCountsWithKeys.reduce((median, { value }) => median + value, 0) /
      usedCountsWithKeys.length,
  );

const manageCache = (cache) => {
  const usedCountsWithKeys = Object.entries(cache).map((item) => ({
    key: item[0],
    value: item[1].usedCount,
  }));

  const median = _median(usedCountsWithKeys);
  console.log(usedCountsWithKeys.map(({ value }) => value));

  console.log(median + "median");
};

const cacheAdd = (cache = {}, count = 0) => {
  return (a, b) => {
    const key = `${a}${b}`;
    if (cache[key]) {
      cache[key].usedCount++;
      manageCache(cache);
      return cache[key].value;
    }
    const res = a + b;
    cache[key] = { value: res, usedCount: 0 };
    return res;
  };
};

const add = cacheAdd();
add(1, 2);
add(1, 2);
add(1, 1);
add(1, 1);
add(1, 1);
add(1, 4);
add(1, 4);
add(1, 4);
add(1, 4);
add(1, 4);
add(1, 4);