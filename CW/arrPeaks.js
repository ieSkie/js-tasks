function pickPeaks(arr) {
  if (arr.length === 0 || isEqual(arr)) {
    return { pos: [], peaks: [] };
  } else {
    return pickFinder(arr);
  }
}

function isEqual(arr) {
  const set = new Set(arr);
  return set.size === 1;
}

function pickFinder(arr) {
  const peaks = [];
  const pos = [];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      let j = i;

      while (j < arr.length - 1 && arr[j] === arr[j + 1]) {
        j++; // перешагиваем плато
      }

      if (j < arr.length - 1 && arr[j] > arr[j + 1]) {
        peaks.push(arr[i]);
        pos.push(i);
        i = j; // чтобы не проверять плато заново
      }
    }
  }
  return {
    pos: pos,
    peaks: peaks,
  };
}
