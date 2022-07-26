/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  //   单向链表： 只有一个操作叫next
  //   这是一个空的链表头部,用于拼成节点
  let curr = new ListNode();
  //
  let dummy = curr;
  // 比较当前两个链表的数,要求两个链表都没有走完
  // 只要一个链表走完了，就只需要把另一个链表剩下来所有的节点拼上去就可以了
  while (list1 !== null && list2 !== null) {
    // l1链表里面的数字比l2的小
    if (list1.val < list2.val) {
      // curr的指针开始走，把l1的数字放进去
      curr.next = list1;
      //   l1的指针要往后走，相当于数组的i++
      list1 = list1.next;
    } else {
      // l2比较小
      curr.next = list2;
      list2 = list2.next;
    }
    // curr指针也需要手动往后移
    curr = curr.next;
  }

  //   如果一个链表空了
  if (list1 !== null) {
    // 就把剩下的链表都加入到curr
    curr.next = list1;
    // 这里不需要移动curr的指针，因为他会把剩下的所有链表包括关系都加进去，上面的我们只想增加一个节点
  }
  if (list2 !== null) {
    curr.next = list2;
  }
  //   curr此时的指针不是在第一位的，因此返回dummy. 常用技巧！！
  //   第一个节点是空的，所以用next跳到第一个正式节点
  return dummy.next;
};
// @lc code=end
