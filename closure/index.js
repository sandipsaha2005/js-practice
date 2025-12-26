const wallet = () => {
  let money = 1000;
  return {
    add: (amount) => money = money + (amount ?? 0),
    show: () => console.log(money),
    withDraw: (amount) =>
      (money >= amount) ? money = money - (amount ?? 0) : "not enough balance",
  };
};

const sagnikMoney = wallet();

const fns = [(x) => x + 1, (x) => x - 1];
[1, 2].map(fns);

const createFibonacci = () => {
  let a = 0;
  let b = 1;

  return () => {
    const current = a;
    [a, b] = [b, b + a];
    return current;
  };
};

const createMultiplier = (x) => (y) => y * x;
const multiplier = createMultiplier(2);