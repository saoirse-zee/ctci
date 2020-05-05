const bracketMap = new Map();
bracketMap.set("(", ")");
bracketMap.set("[", "]");
bracketMap.set("{", "}");

function isBalanced(string) {
  const stack = [];
  for (char of string) {
    if (isOpener(char)) {
      stack.push(char);
    } else {
      const prev = stack.pop();
      if (!bracketMatch(prev, char)) {
        return false;
      }
    }
  }
  const isStackEmpty = stack.length === 0;
  return isStackEmpty;
}

function isOpener(c) {
  return bracketMap.get(c) !== undefined;
}

function bracketMatch(c1, c2) {
  const closer = bracketMap.get(c1);
  return closer === c2;
}

module.exports = isBalanced;
