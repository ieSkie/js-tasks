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
