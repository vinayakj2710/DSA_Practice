//------ Print sub-array of an array in given range ---------

function printSubArray(A, si, ei) {
  let sub = [];
  for (let i = si; i <= ei; i++) {
    sub.push(A[i]);
  }
  return sub;
}

//-------- Print all the possible Sub Arrays ---------------

function allSubArrays(A) {
  let N = A.length;
  let ans = [];
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      ans.push(printSubArray(A, i, j));
    }
  }
  return ans;
}

//----------------------------------------------------------

console.log(printSubArray([1, 2, 3, 4, 5], 1, 3));
console.log(allSubArrays([1, 2, 3, 4, 5]));
