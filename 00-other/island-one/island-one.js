/*

010000
010000
001111
000100
000100

.1....
.1....
..2222
...2..
...2..

*/

const input = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0],
];

const input2 = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
];

/*
11
..
*/
const input3 = [
  [1, 1],
  [0, 0],
];

console.log(countIslands(input3));

// return true if land exists at given cell
// out-of-bounds is considered non-land, i.e. false
function hasLand(i, ri, ci) {
  return getValue(i, ri, ci) === 1;
}

// Safely get the value of a cell in a 2d array
function getValue(array, ri, ci) {
  return array[ri] && array[ri][ci];
}

function countIslands(input) {
  let map = new Array(input.length).fill(new Array(input[0].length).fill("_")); // 2d array representing the "map" of islands
  let islandCount = 0;

  for (let rowI = 0; rowI < input.length; rowI++) {
    const row = input[rowI];
    for (let colI = 0; colI < row.length; colI++) {
      if (hasLand(input, colI, rowI)) {
        const mapHasNotBeenMarked = getValue(map, rowI, colI) === "_";
        if (mapHasNotBeenMarked) {
          islandCount++;
          markMap(colI, rowI);
        }
      }
    }
  }

  function markMap(rowI, colI) {
    // Check if map has already been marked
    const mapHasBeenMarked = getValue(map, rowI, colI) !== "_";
    if (mapHasBeenMarked) {
      return;
    }
    // Check for no land. If no land, mark map as such.
    if (!hasLand(input, rowI, colI)) {
      map[rowI][colI] = ".";
      return;
    }
    // We've found land. Mark map with island "name", i.e. current count.
    map[rowI][colI] = islandCount;
    markMap(rowI, colI + 1); // Check right
    markMap(rowI, colI - 1); // Check left
    markMap(rowI + 1, colI); // Check down
    markMap(rowI - 1, colI); // Check up
  }

  map.forEach((row) => {
    console.log(row);
  });

  return islandCount;
}

module.exports = countIslands;
