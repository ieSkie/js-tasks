function findPivot(arr, low, high) {
  // правильный поиск усредненного пивота(меняем значения)
  const mid = Math.floor((high + low) / 2);
  if (arr[low] > arr[mid]) {
    [arr[low], arr[mid]] = [arr[mid], arr[low]];
  }
  if (arr[low] > arr[high]) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
  }
  if (arr[mid] > arr[high]) {
    [arr[mid], arr[high]] = [arr[high], arr[mid]];
  }
  return mid;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low >= high) return; // база рекурсии

  const pivotIndex = findPivot(arr, low, high);
  const pivot = arr[pivotIndex];
  let boundary = low;

  for (let i = low; i <= high; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (arr[i] < pivot) {
      [arr[i], arr[boundary]] = [arr[boundary], arr[i]];
      boundary++;
    }
  }

  [arr[pivotIndex], arr[boundary]] = [arr[boundary], arr[pivotIndex]];
  quickSort(arr, low, boundary - 1);
  quickSort(arr, boundary + 1, high);
  return arr;
}
