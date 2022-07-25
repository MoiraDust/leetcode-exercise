/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var len = nums.length;
  var res = [];
  for (let i = 0; i < len - 1; i++) {
    var sub = target - nums[i];
    for (let j = i + 1; j < len; j++) {
      if (sub == nums[j]) {
        res[0] = i;
        res[1] = j;
      }
    }
  }
  return res;
};
// @lc code=end
