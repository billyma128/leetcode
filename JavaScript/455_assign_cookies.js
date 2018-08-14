/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let count = 0;
  let j = 0;
  for (const i of g) {
    while (j < s.length && s[j] < i) {
      ++j;
    }
    if (j < s.length) {
      ++count;
      ++j;
    }
  }
  return count;
};
