//  Удаление дубликатов время O(n^2)
const arr = [1, 1, 2, 2, 3, 4, 4, 5, 6, 6];

function removeDuplicatesFor(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }

  return result;
}
console.log(removeDuplicatesFor(arr));

// Удаление дубликатов время O(n)
const arr2 = [1, 1, 2, 2, 3, 4, 4, 5, 6, 6];
function removeDuplicatesFor2(arr) {
  const set = new Set(arr2);
  return Array.from(set);
}
console.log(removeDuplicatesFor2(arr2));
