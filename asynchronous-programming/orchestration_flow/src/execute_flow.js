const executeTask = (recipe) => Deno.readTextFile(recipe);
const executeTasks = (recipes) =>
  Promise.all(recipes.map(executeTask)).then((res) => res).catch(() =>
    "File missing"
  );

export const executeRecipe = (rawRecipes) => {
  const formattedRecipe = rawRecipes.split("\n");

  return Promise.all(
    formattedRecipe.map((recipes) => executeTasks(recipes.split(","))),
  );
};

const readTwo = async () => {
  const x = await Deno.readTextFile("");
  const y = await Deno.readTextFile("");
  return [x, y];
};
