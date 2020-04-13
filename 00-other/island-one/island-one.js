/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

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

islandCount++
*/

const input = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0],
];

input = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
];

input[([1, 1], [0, 0])];
// return true if land exists at given cell
function hasLand() {
  //   TODO
}

function markMap(rowI, colI) {
  // Check if map has already been marked
  if (map[rowI][colI] === undefined) {
    return;
  }

  if (!hasLand(rowI, colI)) {
    map[rowI][colI] = ".";
    return;
  }
  map[rowI][colI] = islandCount;
  // right
  markMap(rowI, colI + 1);
  // do for other 3 directions
}

let map; // 2d array representing the "map" of islands
let islandCount = 0;
for (let rowI = 0; rowI < input.length; rowI++) {
  const row = input[rowI];
  for (let colI = 0; colI < row.length; colI++) {
    if (hasLand(input, colI, rowI)) {
      if (map[rowI][colI] === undefined) {
        islandCount++;
        markMap(colI, rowI);
      }
    }
  }
}

return islandCount;
