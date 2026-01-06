import { LinkedList } from "./linked-list.js";

const main = () => {
  const l1 = new LinkedList();
  l1.add(10);
  l1.add(20);
  l1.add(30);
  l1.add(40);
  l1.add(50);
  l1.display();
  l1.insertAt(3, 45);
  l1.unshift(100);
  l1.shift();
  l1.pop();
  l1.deleteFrom(2);
  console.log(l1.isPresent(10));
};

main();
