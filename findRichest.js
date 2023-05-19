const findRichest = (arr) => {
    let rich = 0;
    arr.forEach((e) => {
        let sum = e.reduce((a, b) => {
            return a + b
        }, 0);
        if (rich < sum) rich = sum;
    }
    )
    return rich;
}

console.log(findRichest([[1, 2, 3], [2, 3, 4]]));


// arr = [[1, 2, 3], [2, 3, 4]];