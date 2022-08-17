function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
        return i;
    }
  }
  return -1;
};

console.log(linearSearch([1, 4, 6, -1, 20], 30));
