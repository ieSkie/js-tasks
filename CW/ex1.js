// Write a function that takes an array of numbers (integers for the tests) and a target number. 
// It should find two different items in the array that, when added together, give the target value. 
// The indexes of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, 
// and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {return [i, j]}пр
    }
  }
}
console.log(twoSum([1,2,3], 4));


// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word){
    const lowerWord = word.toLowerCase();
    const arr = lowerWord.split('');
    const result = [];
    
    for (let i = 0; i < arr.length; i++) { 
        let isDupicate = false;
      
        for (let j = 0; j < arr.length; j++) {
          
            if (i !== j &&  arr[i] === arr[j]) {
                isDupicate = true;
                break;
            }
        }
        result.push(isDupicate ? ")" : "(");
    }
    return result.join('');
}

