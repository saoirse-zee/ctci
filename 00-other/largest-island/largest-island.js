function largestIsland(sea) {
  const visited = new Set();
  function getRegionSize(r, c) {
    // bounds check
    if (r < 0 || c < 0 || r >= sea.length || c >= sea[r].length) {
      return 0;
    }
    // null check
    if (sea[r][c] === 0) {
      return 0;
    }
    if (visited.has(`${r}-${c}`)) {
      return 0;
    }
    visited.add(`${r}-${c}`);
    // dfs
    let size = 1;
    for (let _r = -1; _r <= 1; _r++) {
      for (let _c = -1; _c <= 1; _c++) {
        size += getRegionSize(r + _r, c + _c);
      }
    }
    return size;
  }

  let maxSize = 0;
  for (let col = 0; col < sea.length; col++) {
    for (let row = 0; row < sea[col].length; row++) {
      const regionSize = getRegionSize(row, col);
      maxSize = Math.max(maxSize, regionSize);
    }
  }

  return maxSize;
}

const input = [
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 1],
];

console.log(largestIsland(input));

module.exports = largestIsland;
