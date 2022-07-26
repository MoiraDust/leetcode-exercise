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
  /**需要用到stack.先进的后出，后进的先出，就像盘子 */
  // 创建一个hashMap,把配对的括号放进去
  // 创建一个stack array遍历,map里面有这个key就相当于他是左括号
  // key的value就是右括号，把他push到栈里面
  // key找不到的话那就是右括号，那就要从stack pop出第一个字符
  // 相等的话返回true，否则就是false
  // 循环结束如果stack不为空，说明有一些左括号没被闭合
  /** https://www.bilibili.com/video/BV1wA411b7qZ?p=7&vd_source=30d674f54c95f35513d48cb6dcca033d */

  const mappings = new Map();
  mappings.set("(", ")");
  mappings.set("[", "]");
  mappings.set("{", "}");

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    // 如果map里面有这个key的话
    if (mappings.has(s[i])) {
      stack.push(mappings.get(s[i]));
    } else {
      if (stack.pop() != s[i]) {
        return false;
      }
    }
  }
  // 循环结束后检查stack的长度
  if (stack.length !== 0) {
    return false;
  }

  return true;
};
// @lc code=end
