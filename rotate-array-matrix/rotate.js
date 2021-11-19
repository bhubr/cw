function rotate(matrix, direction) {
  const dimy = matrix.length;
  const dimx = matrix[0].length;
  const out = new Array(dimx);
  for (let i = 0; i < dimx; i++) out[i] = new Array(dimy)
  if (direction === 'clockwise') {
    for (let y = 0; y < dimy; y++) {
      for (let x = 0; x < dimx; x++) {
        out[x][dimy - 1 - y] = matrix[y][x];
      }
    }
  }
  if (direction === 'counter-clockwise') {
    for (let y = 0; y < dimy; y++) {
      for (let x = 0; x < dimx; x++) {
        out[dimx - 1 - x][y] = matrix[y][x];
      }
    }
  }
  return out;
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ], 'clockwise')
);
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ], 'counter-clockwise')
);
module.exports = rotate;
