export const findLets = (lines) => {
  const re = /^let.*=/;
  return lines.filter((line) => line.match(re));
};

export const checkIfLetsReAssigned = (lines) => {
  const re = /[^\bconst\b\blet\b].*/;
  return lines.filter((line) => line.match(re));
};
