/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 != 0) return false;
  //   var x = Math.floor(s.length / 2);
  var index = 0;
  //   console.log(s[index]);
  //   console.log(s[index + 1]);
  while (index < s.length) {
    if (s[index] == "(") {
      if (s[index + 1] != ")") {
        return false;
      } else if (s[index + 1] == ")") {
        index += 2;
      } else {
        return false;
      }
    }
    if (s[index] == "[") {
      if (s[index + 1] != "]") {
        return false;
      } else if (s[index + 1] == "]") {
        index += 2;
      } else {
        return false;
      }
    }
    if (s[index] == "{") {
      if (s[index + 1] != "}") {
        return false;
      } else if (s[index + 1] == "}") {
        index += 2;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
