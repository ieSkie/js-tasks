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

// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findTarget(arr) {
  let evenCounter = 0;
  let oddCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCounter++;
    } else {
      oddCounter++;
    }
  }
  return evenCounter > oddCounter ? "odd" : "even";
}

function findOutlier(integers) {
  let target = findTarget(integers);

  for (let i = 0; i < integers.length; i++) {
    if (target === "odd") {
      if (integers[i] % 2 !== 0) return integers[i];
    } else {
      if (integers[i] % 2 === 0) return integers[i];
    }
  }
}

// Write a function that takes in a string of one or more words, and retu e same string
// , but with all words that have five or more letters reversed (just lik name of this kata).
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

function spinWords(string) {
  const arr = string.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      arr[i] = arr[i].split("").reverse().join("");
    }
  }
  return arr.join(" ");
}

// Дается массив направлений, если длина массива не 10 false,
// если количество n === s и e === w, то true, иначе false.

function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let n = 0,
    s = 0,
    e = 0,
    w = 0;

  for (let dir of walk) {
    if (dir === "n") n++;
    if (dir === "s") s++;
    if (dir === "e") e++;
    if (dir === "w") w++;
  }

  return n === s && e === w;
}

// Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words) {
  if (words === "") return "";

  const arr = words.split(" ");
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    let number = 0;

    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      if (char >= "0" && char <= "9") {
        number = parseInt(char);
        break;
      }
    }

    result[number - 1] = word;
  }

  return result.join(" ");
}

// Given two positive integers n and p, we want to find a positive integer k, if it exists,
//  such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

function digPow(n, p) {
  const str = n.toString();
  const arr = str.split("");
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum = sum + Number(str[i]) ** p;
    p++;
  }
  return sum % n === 0 ? sum / n : -1;
}

console.log(digPow(46288, 5));

// You will be given an array of numbers. You have to sort the odd numbers in ascending order
// while leaving the even numbers at their original positions.
// не зря учил пузырь

function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] % 2 != 0) {
          if (array[i] > array[j]) {
            [array[i], array[j]] = [array[j], array[i]];
          }
        }
      }
    }
  }
  return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors.
// A tower block is represented with "*" character.

function towerBuilder(nFloors) {
  const tower = [];

  for (let i = 1; i <= nFloors; i++) {
    const stars = "*".repeat(2 * i - 1);
    const spaces = " ".repeat(nFloors - i);
    tower.push(spaces + stars + spaces);
  }

  return tower;
}

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
// Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
function rgb(r, g, b) {
  let result = "";
  const arr = ([r, g, b] = [r, g, b].map((val) =>
    val < 0 ? 0 : val > 255 ? 255 : val,
  ));

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] <= 15) {
      result += `0${arr[i].toString(16)}`;
    } else {
      result += arr[i].toString(16);
    }
  }
  return result.toUpperCase();
}
console.log(rgb(0, 0, 0));

//19 Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += " ";
    }
    result += string[i];
  }
  return result;
}

console.log(solution("camelCase"));

//20 Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2],
//  drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr, n) {
  const counts = {};
  const result = [];

  for (const x of arr) {
    counts[x] = (counts[x] || 0) + 1;
    if (counts[x] <= n) result.push(x);
    console.log(counts);
  }

  return result;
}
console.log(deleteNth([1, 2, 3, 1], 1));

//21 Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

function countSmileys(arr) {
  let count = 0;
  for (let s of arr) {
    const eye = s[0] === ":" || s[0] === ";";
    const mouth = s[s.length - 1] === ")" || s[s.length - 1] === "D";
    const nose = s.length === 3 && (s[1] === "-" || s[1] === "~");
    if (eye && mouth && (s.length === 2 || nose)) count++;
  }
  return count;
}

//22   Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//23 You will be given a number and you will need to return it as a string in Expanded Form.

function expandedForm(num) {
  const numStr = num.toString();
  let result = [];

  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr[i];
    if (digit !== "0") {
      const placeValue = digit + "0".repeat(numStr.length - i - 1);
      result.push(placeValue);
    }
  }

  return result.join(" + ");
}

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
// IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

function isValidIP(ip) {
  const octets = ip.split(".");

  if (octets.length !== 4) return false;

  for (let i = 0; i < octets.length; i++) {
    const octet = octets[i];

    if (octet.length === 0) return false;
    if (octet.length > 1 && octet[0] === "0") return false;

    let num = 0;
    for (let j = 0; j < octet.length; j++) {
      const charCode = octet.charCodeAt(j);
      if (charCode < 48 || charCode > 57) return false;
      num = num * 10 + (charCode - 48);
    }

    if (num < 0 || num > 255) return false;
  }

  return true;
}

// "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  const arr = [];
  const lowerStr = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;

    const modified =
      lowerStr.slice(0, i) + lowerStr[i].toUpperCase() + lowerStr.slice(i + 1);
    arr.push(modified);
  }
  return arr;
}

//26 The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
function count(string) {
  const result = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

//27 Roman Numerals Encoder
function solution(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }

  return result;
}

//28 "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

String.prototype.camelCase = function () {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < this.length; i++) {
    const char = this[i];

    if (char === " ") {
      capitalizeNext = true;
    } else {
      if (capitalizeNext) {
        result += char.toUpperCase();
        capitalizeNext = false;
      } else {
        result += char.toLowerCase();
      }
    }
  }

  return result;
};

// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
  const words = string.split(" ");
  const result = [];

  for (let w = 0; w < words.length; w++) {
    let wordResult = "";
    const word = words[w];

    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        wordResult += word[i].toUpperCase();
      } else {
        wordResult += word[i].toLowerCase();
      }
    }

    result.push(wordResult);
  }

  return result.join(" ");
}

//30 Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9

function multiplicationTable(size) {
  const table = [];

  for (let i = 1; i <= size; i++) {
    const row = [];

    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }

    table.push(row);
  }

  return table;
}
