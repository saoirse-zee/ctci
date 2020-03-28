/**
 * A "functional" implementation of a linked list.
 */
function createNode() {
  let _data = "";
  let _next = null;

  const getData = () => _data
  const getNext = () => _next

  const setData = newData => {
    _data = newData;
  };

  const setNext = newNext => {
    _next = newNext;
  };

  return {
    getData,
    getNext,
    setData,
    setNext
  };
}

module.exports = {
  createNode
};
