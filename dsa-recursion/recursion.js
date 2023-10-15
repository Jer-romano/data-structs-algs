/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1))
}

/** betterProduct: calculate the product of an array of numbers in O(n). */

function betterProduct(nums, i=0) {
  if(i == nums.length) return 1;
  else {
    return nums[i] * betterProduct(nums, i+1);
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, maxLength=0, i=0) {
  if(i == words.length) return maxLength;
  else {
    if(words[i].length > maxLength) {
      maxLength = words[i].length;
    }
    return longest(words, maxLength, i+1);

  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length === 0) return "";

  else return str.charAt(0).concat(everyOther(str.slice(2)));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
    if(str.length <= 1) return true;

    if(str.charAt(0) != str.charAt(str.length-1)) return false;

    return isPalindrome(str.slice(1, str.length-1))
}

function rec_findIndex(arr, val, index) {

  if(index >= arr.length) return -1;

  if(arr[index] == val) return index;

  else return rec_findIndex(arr, val, index+1);
} 

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

  return rec_findIndex(arr, val, 0);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 0) return "";

  else return str.charAt(str.length-1).concat(revString(str.slice(0, -1)));

}


function rec_gatherStrings(obj, strings) {
  for(let key in obj) {
    if(typeof obj[key] === "object") {
       rec_gatherStrings(obj[key], strings);
    }
    else if(typeof obj[key] == "string") {
      strings.push(obj[key]);
    }
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for(let key in obj) {
    if(typeof obj[key] === "object") {
       strings.push(...gatherStrings(obj[key]));
    }
    else if(typeof obj[key] === "string") {
      strings.push(obj[key]);
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchHelper(arr, val, start, end) {
  if(start > end) {
    return -1;
  }
  let total = start + end;
  let mid = Math.floor(total / 2);
  if( arr[mid] > val) {
    return binarySearchHelper(arr, val, start, mid-1);
  }
  else if( arr[mid] < val) {
    // [3, 6, 7, 9, 11, 14, 17]  val=6 
    return binarySearchHelper(arr, val, mid+1, end);
  }
  else return mid;
}

function binarySearch(arr, val) {
  if(arr[0] > val || arr[arr.length-1] < val) {
    return -1;
  }
  return binarySearchHelper(arr, val, 0, arr.length-1);

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  rec_findIndex,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchHelper
};
