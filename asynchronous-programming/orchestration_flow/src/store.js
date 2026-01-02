const getNames = (logs) => logs.map((log) => ({ name: log }));

const format = (logs) => {
  
  const descs = getNames(logs);
  return {
    mode: logs.length > 1 ? "Para" : "Single",
    desc: descs,
  };
};

const storeData = (data) => Deno.writeTextFile("./log_report.txt", data);

export const store = (logs) => {
  const jsonData = JSON.stringify(logs.map(format));
  return storeData(jsonData);
};
