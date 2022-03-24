/*
20. Valid Parenthesis
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

const isValid = (str) => {
  // Base cases
  if (!str || str.length < 2) {
    return false;
  }

  let lStr = str;
  while (lStr.length) {
    const pair = lStr.substring(0, 2);
    if (!['()', '[]', '{}'].includes(pair)) {
      return false;
    }

    lStr = lStr.substring(2, lStr.length);
  }

  return true;
};

describe('valid-parentheses', () => {
  test('example 1', () => {
    const ans = isValid('()');
    expect(ans).toEqual(true);
  });

  test('example 2', () => {
    const ans = isValid('()[]{}');
    expect(ans).toEqual(true);
  });

  test('example 3', () => {
    const ans = isValid('(]');
    expect(ans).toEqual(false);
  });

  test('single char', () => {
    const ans = isValid(']');
    expect(ans).toEqual(false);
  });

  test('nested parens', () => {
    const ans = isValid('{[]}');
    expect(ans).toEqual(true);
  });
});
