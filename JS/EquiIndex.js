/*---------------- Equilibrium Index ------------------------*/
function equiIndex(arr) {
  let n = arr.length;
  let psum = [];
  psum[0] = arr[0];
  for (let i = 1; i < n; i++) {
    psum[i] = psum[i - 1] + arr[i];
  }

  for (let i = 0; i < n; i++) {
    let leftSum = psum[i - 1];
    let rightSum = psum[n - 1] - psum[i];
    if (leftSum == rightSum) {
      return i;
    }
  }
  return -1;
}

let A = [-7, 1, 5, 2, -4, 3, 0];
console.log(equiIndex(A)); // 3
