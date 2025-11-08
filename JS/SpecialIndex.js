// on removing a perticular index - sum of even indexed elements == sum of odd indexed elements

function specialIndex(A) {
  let N = A.length;
  let peven = [];
  let podd = [];
  peven[0] = A[0];
  podd[0] = 0;
  for (let i = 1; i < N; i++) {
    if ((i & 1) != 1) {
      peven[i] = peven[i - 1] + A[i];
      podd[i] = podd[i - 1];
    } else {
      peven[i] = peven[i - 1];
      podd[i] = podd[i - 1] + A[i];
    }
  }
  for (let i = 0; i < N; i++) {
    let sumEven = 0;
    let sumOdd = 0;
    if (i == 0) {
      sumEven = podd[N - 1] - podd[i];
      sumOdd = peven[N - 1] - peven[i];
    } else {
      sumEven = peven[i - 1] + podd[N - 1] - podd[i];
      sumOdd = podd[i - 1] + peven[N - 1] - peven[i];
    }
    if (sumEven == sumOdd) {
      return i;
    }
  }
  return -1;
}

console.log(specialIndex([4, 3, 2, 7, 6, -2]));
