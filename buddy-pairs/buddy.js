// https://www.codewars.com/kata/59ccf051dcc4050f7800008f/train/javascript
function sum(n) {
  if (n < 2) return n;
  let sum = 1;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) sum += i
  }
  return sum
}

function buddy(start,limit) {
  for (let j = start; j <= limit; j++) {
    for (let k = start; k <= j; k++) {
      const sum1 = sum(j)
      const sum2 = sum(k)
      if ((j + 1 === sum2) && (k + 1 === sum1)) {
          return j < k ? [j, k] : [k, j]
      }
    }
  }
  return [-1,-1];
//   return "Nothing";
}

module.exports = buddy
