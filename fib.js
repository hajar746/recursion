function fibs(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i === 0 || i === 1) {
      arr.push(i);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  console.log(arr);
}

// RECURSIVE FIBONACCI FUNCTION ////////////////////////////
const fibrec = (n, arr = [0, 1]) => {
  if (n <= arr.length) return arr.slice(0, n);

  arr.push(arr.at(-1) + arr.at(-2));
  return fibrec(n, arr);
};

console.log(fibrec(8));
