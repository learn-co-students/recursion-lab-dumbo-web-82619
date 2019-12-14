function printString(myString) {
    console.log(myString[0]);
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
}
  
function reverseString(myString) {
    if (myString.length < 2) {
        return myString
    } else {
        return reverseString(myString.substring(1)) + myString[0]
    }
}

function isPalindrome(myString) {
    let l = myString.length
    if (l < 2) {
        return true
    } else if (myString[l - 1] === myString[0]) {
        return isPalindrome(myString.substring(1, l - 1))
    } else {
        return false
    }
}

// function addUpTo(array, index) {
//     let l = array.length
//     if (l === index + 1) {
//         return array.reduce((tot, num) => tot + num)
//     } else {
//         array.pop()
//         return addUpTo(array, index)
//     }
// }

function addUpTo(array, index) {
    return index > 0 ? array[index] + addUpTo(array, --index) : array[index]
}

function maxOf(myArray) {
    if (myArray.length === 1) {
      return myArray[0];
    } else {
      return Math.max(myArray.pop(), maxOf(myArray));
    }
}

function includesNumber(myArray, myNumber) {
    if (!myArray.length) {
      return false;
    } else if (myArray[0] === myNumber) {
      return true;
    } else {
      return includesNumber(myArray.slice(1), myNumber);
    }
}