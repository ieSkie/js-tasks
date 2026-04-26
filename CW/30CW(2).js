// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.
function pigIt(str) {
  const arr = str.split(" ");
  const result = arr.map((el) => {
    if (el === "?" || el === "!" || el === "." || el === ",") {
      return el;
    }
    if (el.length === 1) {
      return el + "ay";
    }
    const first = el[0];
    return el.slice(1) + first + "ay";
  });
  return result.join(" ");
}
console.log(pigIt("Pig latin is cool"));

//There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.
function findUniq(arr) {
  const sortedArr = [...arr].sort((a, b) => {
    return a - b;
  });
  const arrLength = sortedArr.length;
  if (sortedArr[0] != sortedArr[1]) {
    return sortedArr[0];
  } else if (sortedArr[arrLength - 1] != sortedArr[arrLength - 2]) {
    return sortedArr[arrLength - 1];
  }
}
console.log(findUniq([1, 1, 1, 2, 1, 1]));

// Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use).
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
function solution(str) {
  const arr = str.split("");
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (arr.length === i + 1) {
      result.push(arr[i] + "_");
    } else {
      result.push(arr[i] + arr[i + 1]);
    }
  }
  return result;
}
console.log(solution("abcde"));

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// Example:
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

function findMissingLetter(array) {
  for (let i = 0; i < array.length - 1; i++) {
    const currentCode = array[i].charCodeAt(0);
    const nextCode = array[i + 1].charCodeAt(0);
    if (nextCode - currentCode > 1) {
      return String.fromCharCode(currentCode + 1);
    }
  }
}

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  const sec = seconds % 60;
  const min = Math.floor((seconds % 3600) / 60);
  const h = Math.floor(seconds / 3600);

  function pad(n) {
    if (n < 10) {
      return "0" + n;
    } else {
      return "" + n;
    }
  }
  return `${pad(h)}:${pad(min)}:${pad(sec)}`;
}
