const noOfSteps = (n) => {
    steps = 0;
    while (n > 0) {
        { n % 2 === 0 ? n /= 2 : n-- }
        steps++;
    }
    return steps;
}

console.log(noOfSteps(15));