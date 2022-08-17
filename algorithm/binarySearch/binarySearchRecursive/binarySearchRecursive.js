function binarySearchRecursive(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
    
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
        return middleIndex;
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1);
    } else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }
}

console.log(binarySearchRecursive([1, 5, 10, 12, 20], 5)); // 1
console.log(binarySearchRecursive([1, 5, 10, 12, 20], 10)); // 2
console.log(binarySearchRecursive([1, 5, 10, 12, 20], 1)); // 0
console.log(binarySearchRecursive([1, 5, 10, 12, 20], 500)); // -1