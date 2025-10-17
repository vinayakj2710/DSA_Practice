/*------------------ Noble Integer in an Array with all distinct values --------------------*/
function countNoble(A) {
  let N = A.length;
  A.sort((a, b) => a - b); // sorting array in ascending order
  let noble = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] == i) {
      noble++;
    }
  }
  return noble;
}

/*------------------ Noble Integer in an Array with all non-distinct values --------------------*/

function nobleIntTwo(A) {
  let N = A.length;
  A.sort((a, b) => a - b);
  let noble = 0;
  let smaller_count = 0; // keeping track of smaller counts
  if (A[0] == 0) noble++; //edgecase
  for (let i = 1; i < N; i++) {
    if (A[i] !== A[i - 1]) {
      smaller_count = i;
    }
    if (smaller_count == A[i]) {
      noble++;
    }
  }
  return noble;
}

/*--------------------- Noble Integer with value equals to greater numbers ---------------------*/

function nobleIntThree(A) {
  let N = A.length;
  A.sort((a, b) => a - b);
  let noble = 0;
  let greater_count = 0;
  if (A[N - 1] == 0) noble++;
  for (let i = 0; i < N - 1; i++) {
    if (A[i] == A[i + 1]) {
      continue;
    }
    greater_count = N - i - 1;
    if (greater_count == A[i]) {
      noble++;
    }
  }
  return noble;
}

/*------------------  Test cases --------------------*/

console.log(countNoble([0, 1, 2, 3]));
console.log(nobleIntTwo([3, 2, 1, 3]));
console.log(nobleIntThree([3, 2, 1, 3]));
