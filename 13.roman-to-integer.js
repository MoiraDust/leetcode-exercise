/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // 判断字符串是否以这些字符开头,然后subString掉开头
  // 需要从大到小写判断条件
  let res = 0;
  while (s) {
    if (s.startsWith("M")) {
      res += 1000;
      s = s.substring(1);
    } else if (s.startsWith("CM")) {
      res += 900;
      s = s.substring(2);
    } else if (s.startsWith("D")) {
      res += 500;
      s = s.substring(1);
    } else if (s.startsWith("CD")) {
      res += 400;
      s = s.substring(2);
    } else if (s.startsWith("C")) {
      res += 100;
      s = s.substring(1);
    } else if (s.startsWith("XC")) {
      res += 90;
      s = s.substring(2);
    } else if (s.startsWith("L")) {
      res += 50;
      s = s.substring(1);
    } else if (s.startsWith("XL")) {
      res += 40;
      s = s.substring(2);
    } else if (s.startsWith("X")) {
      res += 10;
      s = s.substring(1);
    } else if (s.startsWith("IX")) {
      res += 9;
      s = s.substring(2);
    } else if (s.startsWith("V")) {
      res += 5;
      s = s.substring(1);
    } else if (s.startsWith("IV")) {
      res += 4;
      s = s.substring(2);
    } else if (s.startsWith("I")) {
      res += 1;
      s = s.substring(1);
    }
  }

  return res;
};
// @lc code=end
