function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

/**
 * For each place (1, 10, 100, ...)
 *      For val in array:
 *            sort by ones place into buckets
 *      Move values from buckets back to array
 */
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for(let i = 0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let k = 0; k < nums.length; k++) {
            let num = nums[k];
            let digit = getDigit(num, i);
            digitBuckets[digit].push(num);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };