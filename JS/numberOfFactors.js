// Gives  the number of factors number N has
function numberOfFactors(N) {
  let count = 0;
  for (let i = 0; i * i < N; i++) {
    if (N % i == 0) {
      if (N / i == i) {
        count++;
      } else {
        count += 2;
      }
    }
  }
  return count;
}

console.log(numberOfFactors(10));
