const randomChoice = Math.floor(Math.random() * 51);
const arr = [...Array(51).keys()];

function findChoice(arr) {
  let min = 0;
  let max = arr.length - 1;
  let mid;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);

    if (randomChoice == arr[mid]) {
      return mid;
    } else if (randomChoice < arr[mid]) {
      max = mid - 1;
    } else if (randomChoice > arr[mid]) {
      min = mid + 1;
    }
  }
}
console.log(`random: ${randomChoice}`);
console.log(`function found: ${findChoice(arr)}`);
