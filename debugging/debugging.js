console.log("test");

const n = new Promise((resolve) => {
  setTimeout(() => {
    resolve("something");
  }, 3000);
});

n.then(res => {
  console.log(res);
})
