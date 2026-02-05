// Write a function that takes an integer as input, and returns the number of bits that are equal 
// to one in the binary representation of that number. You can guarantee that input is non-negative.
function countBits(n) {
  const binaryStr = n.toString(2);
  let counter = 0;
  
  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === '1') {
      counter++;
    }
  }
  
  return counter;
}

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence
//  "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(string){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerStr = string.toLowerCase();
  
  for (let i = 0; i < alphabet.length; i++) {
    if (!lowerStr.includes(alphabet[i])) {return false}
  }
  return true;
}