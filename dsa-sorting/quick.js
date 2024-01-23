/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, startIdx = 0, endIdx = (arr.length-1)) {

    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    const pivotValue = arr[startIdx];
    let pivotIdx = startIdx;

    for(let i = startIdx+1; i <= endIdx; i++) {
        if(arr[i] < pivotValue) {
            pivotIdx++;
            swap(arr, i, pivotIdx);
        }
    }

    swap(arr, startIdx, pivotIdx);

    return pivotIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, leftIdx=0, rightIdx=(arr.length-1)) {
    if(arr.length <= 1) return arr;
    if(leftIdx >= rightIdx) return arr;

    let pivotIdx = pivot(arr, leftIdx, rightIdx);

    arr = quickSort(arr, leftIdx, pivotIdx-1);
    arr = quickSort(arr, pivotIdx+1, rightIdx);
    return arr;
}

module.exports = { pivot, quickSort };