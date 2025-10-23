/*--------------- Finding sum within given range ------------------*/

function rangedSum(A, B) {
  let N = A.length;
  let M = B.length;
  let pSum = []; // Prefix Sum Array initialization
  pSum[0] = A[0];
  for (let i = 1; i < N; i++) {
    pSum[i] = pSum[i - 1] + A[i];
  }
  let ans = [];
  for (let i = 0; i < M; i++) {
    let l = B[i][0];
    let r = B[i][1];
    let sum = 0;
    if (l == 0) {
      sum = pSum[r];
    } else {
      sum = pSum[r] - pSum[l - 1];
    }
    ans.push(sum);
  }
  return ans;
}

/*----------------- Prefix sum of even Indexed elements --------------*/

function evenSum(A, B) {
  let N = A.length;
  let M = B.length;
  let pSum = []; // Prefix Sum Array initialization
  pSum[0] = A[0];
  for (let i = 1; i < N; i++) {
    if (i % 2 == 0) {
      pSum[i] = pSum[i - 1] + A[i];
    } else {
      pSum[i] = pSum[i - 1];
    }
  }
  let ans = [];
  for (let i = 0; i < M; i++) {
    let l = B[i][0];
    let r = B[i][1];
    let sum = 0;
    if (l == 0) {
      sum = pSum[r];
    } else {
      sum = pSum[r] - pSum[l - 1];
    }
    ans.push(sum);
  }
  return ans;
}

/*----------------- Prefix sum of odd Indexed elements --------------*/

function oddSum(A, B) {
  let N = A.length;
  let M = B.length;
  let pSum = []; // Prefix Sum Array initialization
  pSum[0] = 0;
  for (let i = 1; i < N; i++) {
    if (i % 2 != 0) {
      pSum[i] = pSum[i - 1] + A[i];
    } else {
      pSum[i] = pSum[i - 1];
    }
  }
  let ans = [];
  for (let i = 0; i < M; i++) {
    let l = B[i][0];
    let r = B[i][1];
    let sum = 0;
    if (l == 0) {
      sum = pSum[r];
    } else {
      sum = pSum[r] - pSum[l - 1];
    }
    ans.push(sum);
  }
  return ans;
}

//-------------------------------------------------------

let A = [1, 2, 3, 4, 5];
let B = [
  [0, 2],
  [1, 4],
];

console.log(rangedSum(A, B)); // [ 6, 14 ]
console.log(evenSum(A, B)); // [ 4, 8 ]
console.log(oddSum(A, B)); // [ 2, 6 ]
