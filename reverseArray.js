function reverseArray(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4])); /* T.C = O(N) --- S.C = O(1) */

//-----------Reverse Part of an Array----------------------------------------//

function revPartArray(arr, si, ei) {
  // si - Start index, ei - End index
  let N = arr.length;
  while (si < ei) {
    let temp = arr[si];
    arr[si] = arr[ei];
    arr[ei] = temp;
    si++;
    ei--;
  }
  return arr;
}

console.log(revPartArray([1, 2, 3, 4], 1, 2)); /* T.C = O(N) --- S.C = O(1) */

//---------------- Rotate an array K times ----------------------------------//

function rotateKtimes(arr, K) {
  let N = arr.length;
  K = K % N;
  revPartArray(arr, 0, N - 1);
  revPartArray(arr, 0, K - 1);
  revPartArray(arr, K, N - 1);
  return arr;
}

console.log(rotateKtimes([1, 2, 3, 4], 2)); /* T.C = O(N) --- S.C = O(1) */
