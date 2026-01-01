// curl -v --cookie "session=53616c7465645f5fb0af2847248a0f6829905ad3a4fd2bdd6d07192f7f0dcbaebec54f0b9ad05e71294317cfcadcf6c7c0da50867c9e8d39e0fa04e3baf5c483" https://adventofcode.com/2025/leaderboard/private/view/829678.json

const main = async () => {
  const d = await Deno.readTextFile("./leaderboard-2020.txt");

  const paresed = await JSON.parse(d);
  console.log(paresed);
};
main();
