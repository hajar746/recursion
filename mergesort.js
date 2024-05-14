// MERGESORT ////////////////////////////////////////////////
function mergeSort(array) {
  if (array.length <= 1) return array;

  let mid = Math.round(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const mergedArr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }

  return mergedArr.concat(left, right);
}

console.log(mergeSort([105, 79, 100, 110]));
