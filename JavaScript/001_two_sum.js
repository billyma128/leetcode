/** Solution 1 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

/** Solution 2 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hash = new Map();
  nums.forEach((val, idx) => {
    hash.set(val, idx);
  });
  for (let i = 0; i < nums.length; i += 1) {
    const diff = target - nums[i];
    const indice = hash.get(diff);
    if (hash.has(diff) && indice !== i) {
      return [i, indice];
    }
  }
  return [];
};
