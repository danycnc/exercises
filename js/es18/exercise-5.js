function memoize(fn) {
  let cache = {};
  // ...

  function checkCache(value) {
    if (value in cache) {
      console.log(`Fetching from cache for ${cache[value]}`);
      return cache[value];
    } else {
      // console.log("Calculating result");
      let result = fn(value);
      cache[value] = result;
      return result;
    }
  }
  return checkCache;
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
