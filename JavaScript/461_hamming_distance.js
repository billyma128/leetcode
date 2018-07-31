/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let r = 0;
  let t = x ^ y;
  while (t > 0) {
      r += t & 1;
      t >>>= 1;
  }
  return r;
};
