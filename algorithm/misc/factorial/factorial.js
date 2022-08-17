function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorial(0)); // 1
console.log(factorial(4)); // 4 * 3 * 2 * 1 === 24
console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1  === 120