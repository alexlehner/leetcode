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

  // Setup key value pair lookup
  const map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');

  // Store a list of openers as our DS
  const stack = [];

  for (const char of str) {
    if (map.has(char)) {
      // If char is a known starting character, load it in the stack
      stack.push(char);
    } else if (stack.length > 0 && char === map.get(stack[stack.length - 1])) {
      // If it's a closing bracket for the most recent stack item, drop that item
      stack.pop();
    } else {
      // This is either an invalid char or doesn't match with the sequence
      return false;
    }
  }

  return stack.length === 0;
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
    const ans = isValid('{{[]}}');
    expect(ans).toEqual(true);
  });
});
