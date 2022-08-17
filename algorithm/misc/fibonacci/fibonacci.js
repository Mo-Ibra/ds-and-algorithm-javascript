function fibonacci(num) {
    
    let result = [0, 1];

    for(let i = 2; i < num; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }

    return result;
}

console.log(fibonacci(3));  // [0, 1, 1];
console.log(fibonacci(6));  // [0, 1, 1, 2, 3, 5]