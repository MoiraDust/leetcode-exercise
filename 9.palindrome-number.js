/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  var revNum = [];
  var oriNum = [];
  var index = 0;
  while (x > 0) {
    let num = x % 10;
    revNum.push(num);
    oriNum.push(num);
    console.log(index, revNum[index]);
    x = Math.floor(x / 10);
    index++;
  }
  oriNum.reverse();
  console.log(revNum, oriNum);
  return JSON.stringify(revNum) === JSON.stringify(oriNum);
};
// @lc code=end
