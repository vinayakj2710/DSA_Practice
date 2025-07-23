function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] == target - arr[i]) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2, 4, 7, 9,6,1], 10));

function twoSum2(arr, target) {
    let newMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (newMap.has(complement)) {
            return [newMap.get(complement), i];
        }
        newMap.set(arr[i], i);
    }
}

console.log(twoSum2([2, 4, 7, 9,6,1], 10));

// let arr = [1, 2, 3, 4, 5, 6];
// target = 10;

// o / p =[3, 5];