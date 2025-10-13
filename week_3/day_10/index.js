function numberOfDigits(number) {
  if (number === 0) {
    return 1;
  }

  const logValue = Math.log2(number);
  return Math.floor(logValue + 1);
}



