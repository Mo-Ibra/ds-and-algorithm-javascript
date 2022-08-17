function bubbleSort(arr) {
    
    let swaped;

    do {
        swaped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swaped = true;
            }
        }
    } while (swaped)


    console.log(arr);
    console.log(swaped);
}

bubbleSort([-6, 20, 8, -2, 4]);