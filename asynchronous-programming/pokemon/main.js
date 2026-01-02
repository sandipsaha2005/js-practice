const main = async () => {
  const userPrefrence = prompt("Enter pokemon name :");
  const url = `https://pokeapi.co/api/v2/pokemon/${userPrefrence}`;
  console.log(url);
  const pokemonDetails = await fetch(url).then((res) => res.json());
  console.log(pokemonDetails.abilities);
};

main();
