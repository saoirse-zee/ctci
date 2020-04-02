/**
 * Determines whether there is a route between two nodes.
 * Uses depth first search.
 *
 * @param {GraphNode} origin
 * @param {GraphNode} destination
 */
function isRoute(origin, destination) {
  const visited = new Set();
  return _isRoute(origin, destination);

  function _isRoute(_o, _d) {
    if (visited.has(_o.value)) {
      return false;
    }
    visited.add(_o.value);
    const { neighbors } = _o;
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (neighbor.value === _d.value) {
        return true;
      }
      return _isRoute(neighbor, _d);
    }
    return false;
  }
}

module.exports = isRoute;
