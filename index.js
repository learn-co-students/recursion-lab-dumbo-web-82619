function printString(str) {
  console.log(str[0])
  str.length > 1 ? printString(str.slice(1, str.length)) : null
}

function reverseString(str) {
  if (str.length < 2) {
    return str
  } else {
    return reverseString(str.slice(1)) + str[0]
  }
}

function isPalindrome(str) {
  if (str.length === 1) {
    return true
  } else if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1))
  } else {
    return false
  }
}

function addUpTo(arr, idx) {
  return idx ? arr[idx] + addUpTo(arr, --idx) : arr[idx]
}

function maxOf(arr) {
  return arr.length > 1 ? Math.max(arr.pop(), maxOf(arr)) : arr[0]
}

function includesNumber(arr, num) {
  if (arr[0] === num) {
    return true
  } else if (arr.length === 0) {
    return false
  } else {
    return includesNumber(arr.slice(1), num)
  }
}