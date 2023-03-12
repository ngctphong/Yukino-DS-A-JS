function findFactorialRecursive(number) {
  if (number === 1) {
    return number;
  }

  return number * findFactorialRecursive(number - 1);
}

const result = findFactorialRecursive(7);
console.log(result);

// O(n)
