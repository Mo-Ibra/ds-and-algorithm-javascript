function climbingStaricase(n) {
    const noOfWays = [1, 2];
    
    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    }

    return noOfWays[n - 1];
}

console.log(climbingStaricase(1));  // 1
console.log(climbingStaricase(2));  // 2
console.log(climbingStaricase(3));  // 3
console.log(climbingStaricase(4));  // 5
console.log(climbingStaricase(5));  // 8