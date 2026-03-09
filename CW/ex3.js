// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
   let counter = 0;
   let result = 1;
   while (num > 9) {
     let arr = num.toString().split('');
     for (let i = 0; i < arr.length; i++) {
       result *= arr[i];
     }
     num = result;
     result = 1;
     counter++;
   }
  return counter;
}

// Дана строка. Нужно вернуть новую строку, где каждое слово длиной 5 или больше 
// перевёрнуто задом наперёд, а остальные слова остаются как есть.

function spinWords(str) {
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= 5) {
        arr[i] = arr[i].split("").reverse().join("");
      }
  }
  return arr.join(" ");
}
console.log(spinWords("This is another test"));

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    const arr = text.toLowerCase().split("");
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if ("abcdefghijklmnopqrstuvwxyz".includes(arr[i]))
        result.push(arr[i].charCodeAt(0) - 96);
    }
  return result.join(" ");
}
