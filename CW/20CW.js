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

// Write a function that takes in a string of one or more words, and returns the same string
// , but with all words that have five or more letters reversed (just like the name of this kata).
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
