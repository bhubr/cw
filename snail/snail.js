snail = function (array) {
  if (!array[0].length) return [];
  const out = [];
  let x = 0;
  let y = 0;
  const outLen = array[0].length ** 2;
  for (i = 0; i < array.length; i++) {
    for (x = i; x < array.length - i; x++) {
      out.push(array[y][x]);
      if (out.length === outLen) return out;
    }
    x--;
    for (y = i + 1; y < array.length - i; y++) {
      out.push(array[y][x]);
      if (out.length === outLen) return out;
    }
    y--;
    for (x = y - 1; x >= i; x--) {
      out.push(array[y][x]);
      if (out.length === outLen) return out;
    }
    x++;
    for (y = y - 1; y > i; y--) {
      out.push(array[y][x]);
      if (out.length === outLen) return out;
    }
    y++;
  }
  return out;
};

module.exports = snail;
