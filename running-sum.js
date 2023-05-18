// Running sum of 1D array

const runningSum = (arr) => {
    for (let i = 1; i < arr.length; i++){
         arr[i] += arr[i - 1];
    }
    return arr;
}

console.log(runningSum([1, 2, 3]));