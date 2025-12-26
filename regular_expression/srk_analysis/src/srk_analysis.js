export const noOfMoviesActedIn = (movies) => {
  const regex = /Actor/;
  return movies.filter((movie) => regex.test(movie));
};

export const peakSrk = (movies) => {
  const moviesActedIn = noOfMoviesActedIn(movies);
  const regexForyear = /\d{4}/;
  const movieFrequency = moviesActedIn.reduce((obj, movie) => {
    const year = movie.match(regexForyear);
    obj[year] = obj[year] || 0;
    obj[year] = obj[year] + 1;
    return obj;
  }, {});

  return Object
    .entries(movieFrequency)
    .sort((a, b) => b[1] - a[1])
    .at(0)
    .join(" ");
};
