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




// let arr = [1, 2, 3, 4, 5, 6];
// target = 10;

// o / p =[3, 5];