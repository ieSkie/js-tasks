// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements
// with the same value next to each other and preserving the original order of elements.
const uniqueInOrder = function (iterable) {
  if (typeof iterable === "string") {
    iterable = iterable.split("");
  }
  const result = [];
  for (let i = 0; i < iterable.length; i++) {
    if (!(iterable[i] === iterable[i + 1])) {
      result.push(iterable[i]);
    }
  }
  return result;
};

console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// 1 решение O(n^2)
function zeroCounter(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      counter++;
    }
  }
  return counter;
}
function moveZeros(arr) {
  const zeroNumber = zeroCounter(arr);
  let cycleCount = 0;
  while (cycleCount < zeroNumber) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === 0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    cycleCount++;
  }
  return arr;
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
  const numbers = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  text = text.toLowerCase().split("");

  for (let i = 0; i < text.length; i++) {
    if (alphabet.includes(text[i])) {
      numbers.push(text[i].charCodeAt() - 96);
    }
  }
  return numbers.join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If a number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  const values = [];
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      values.push(i);
    }
  }
  return values.reduce((sum, value) => {
    return sum + value;
  }, 0);
}

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6, 10).join("")}`;
}

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
