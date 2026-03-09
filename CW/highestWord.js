// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const arr = x.split(" ");
  let maxSum = 0;
  let biggestWord = "";

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;

    for (let j = 0; j < arr[i].length; j++) {
      currentSum += arr[i][j].charCodeAt(0) - 96;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      biggestWord = arr[i];
    }
  }
  return biggestWord;
}

console.log(high("man i need a taxi up to ubud"));
