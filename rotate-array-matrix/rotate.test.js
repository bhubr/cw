const deepEqual = require("chai").assert.deepEqual;
const rotate = require("./rotate");

describe("Tests suite", () => {
  it("sample tests", () => {
    // Test a matrix with equal numbers of rows/cols
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    deepEqual(rotate(matrix, "counter-clockwise"), [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ]);
    deepEqual(rotate(matrix, "clockwise"), [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
    deepEqual(rotate(rotate(matrix, "counter-clockwise"), "clockwise"), [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    deepEqual(
      rotate(
        rotate(rotate(rotate(matrix, "clockwise"), "clockwise"), "clockwise"),
        "clockwise"
      ),
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]
    );

    // Test a matrix with unequal number of rows/cols
    matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ];
    deepEqual(rotate(matrix, "counter-clockwise"), [
      [3, 6, 9, 12],
      [2, 5, 8, 11],
      [1, 4, 7, 10],
    ]);
    deepEqual(rotate(matrix, "clockwise"), [
      [10, 7, 4, 1],
      [11, 8, 5, 2],
      [12, 9, 6, 3],
    ]);

    // Test a matrix with only one row/col
    matrix = [[1, 2, 3]];
    deepEqual(rotate(matrix, "counter-clockwise"), [[3], [2], [1]]);
    deepEqual(rotate(matrix, "clockwise"), [[1], [2], [3]]);
    deepEqual(rotate(rotate(matrix, "clockwise"), "clockwise"), [[3, 2, 1]]);

    // Test a single cell matrix
    matrix = [[1]];
    deepEqual(rotate(matrix, "counter-clockwise"), [[1]]);
  });
});
