/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {

    if (n < 2) return false;

    let result = [];

    for (let i = 2; i < n; i++) {
        if (i % 2 === 0) {
            // console.log(i);
        } else {
            console.log(i);
        }
    }
};

countPrimes(10);