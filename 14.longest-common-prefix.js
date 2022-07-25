/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var prefix = [];
  if (strs.length == 0) {
    return prefix;
  }
  //   找到最短的那个字符串
  let minLen = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length <= minLen) {
      minLen = strs[i].length;
    }
  }
  //   console.log("minLen", minLen);
  var index = 0;
  outer: while (index < minLen) {
    let char = strs[0][index];
    console.log(index + "char: " + char);
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][index] !== char) {
        break outer;
      }
    }
    prefix.push(char);
    index++;
  }
  //   convert array to string
  return prefix.join("");
};
// @lc code=end
