function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let currMin = Number.MAX_VALUE;
        let currMinIndex = 0;
        for(let j = i; j < arr.length; j++) {
            if(arr[j] < currMin) {
             currMinIndex = j;
             currMin = arr[j];
            }
        }
        let temp = arr[i];
        arr[i] = currMin;
        arr[currMinIndex] = temp;
    }
    return arr;
}

module.exports = selectionSort;