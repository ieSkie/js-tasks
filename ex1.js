// Implement the function unique_in_order which takes as argument a sequence and
// returns a list of items without any elements with the same value next to each
// other and preserving the original order of elements.
var uniqueInOrder=function(iterable){
  if (typeof iterable === "string") {
    iterable = [...iterable];
  } 
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === iterable[i+1]) {
      delete iterable[i];
      i--;
    }
  }
  return iterable.filter(x => x !== undefined);
}

// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first
// list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
function arrayDiff(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      result.push(a[i]);
    }
  }
  return result;
}