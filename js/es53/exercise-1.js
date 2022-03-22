function sum(...args) {
  let total = 0;

  total = args.reduce((current, next) => current + next, 0);

  return total;
}

console.log(sum(1, 2, 3, 4, 5));
