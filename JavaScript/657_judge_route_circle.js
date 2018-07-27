/** Solution 1 */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let dx = 0;
  let dy = 0;
  let dxMap = { R: 1, L: -1 };
  let dyMap = { U: 1, D: -1 };
  for (const char of moves) {
    dx += dxMap[char] || 0;
    dy += dyMap[char] || 0;
  }
  return dx === 0 && dy === 0;
};

/** Solution 2 */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  const countMap = new Map();

  for (const char of moves) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }
  return (
    countMap.get('R') === countMap.get('L') &&
    countMap.get('U') === countMap.get('D')
  );
};
