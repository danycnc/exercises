function sumUntil(maxValue) {
  // ...
  let sum = 0;
  for (let i = 1; i < maxValue + 1; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumUntil(5));
