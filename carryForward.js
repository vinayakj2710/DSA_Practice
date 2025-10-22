// ------- Count of 'ag' pairs in given string ----------

function countAgPairs(str) {
  let N = str.length;
  let pairs = 0;
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (str[i] == "a") {
      count++;
    }
    if (str[i] == "g") {
      pairs += count;
    }
  }
  return pairs;
}

//---------------- count of even numbers in given range -----------

function countOfEven(A, B) {
  let N = A.length;
  let M = B.length;
  let pcount = [];
  if (A[0] % 2 == 0) {
    pcount[0] = 1;
  } else {
    pcount[0] = 0;
  }

  for (let i = 1; i < N; i++) {
    if (A[i] % 2 == 0) {
      pcount[i] = pcount[i - 1] + 1;
    } else {
      pcount[i] = pcount[i - 1];
    }
  }

  let ans = [];
  for (let i = 0; i < M; i++) {
    let l = B[i][0];
    let r = B[i][1];
    let count = 0;
    if (l == 0) {
      count = pcount[r];
    } else {
      count = pcount[r] - pcount[l - 1];
    }
    ans.push(count);
  }
  return ans;
}

//-----------------------------------------------------

console.log(countAgPairs("abcgdavdgge"));
console.log(
  countOfEven(
    [1, 2, 3, 4, 5, 6],
    [
      [0, 2],
      [1, 5],
    ]
  )
);
