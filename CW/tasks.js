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

// Попытки оптимизации
