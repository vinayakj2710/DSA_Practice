// sum of odd indexed elements in a given range of an array
function sumOfOddIndexedArray(A, B) {
  let res = [];
  let pSum = [];
  pSum[0] = 0;
  for (let i = 1; i < A.length; i++) {
    if (i % 2 == 0) {
      pSum[i] = pSum[i - 1];
    } else {
      pSum[i] = A[i] + pSum[i - 1];
    }
  }
  for (let j = 0; j < B.length; j++) {
    let l = B[j][0];
    let r = B[j][1];
    if (l == 0) {
      res.push(pSum[r]);
    } else {
      res.push(pSum[r] - pSum[l - 1]);
    }
  }
  return res;
}

function noOfEvenRange(A, B) {
  let ans = [];
  for (let j = 0; j < B.length; j++) {
    let si = B[j][0];
    let ei = B[j][1];
    let count = 0;
    for (let k = si; (k = ei); k++) {
      if (A[k] % 2 === 0) {
        count++;
      }
    }
    ans.push(count);
  }
  return ans;
}
