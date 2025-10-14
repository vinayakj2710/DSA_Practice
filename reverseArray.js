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

console.log(reverseArray([1, 2, 3, 4]));

/* T.C = O(N) --- S.C = O(1) */
