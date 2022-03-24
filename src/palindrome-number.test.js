/*
1. Palindrome Number
https://leetcode.com/problems/palindrome-number/

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }

  const stringified = x.toString();
  return stringified === stringified.split('').reverse().join('');
};

describe('palindrome-number', () => {
  test('example 1', () => {
    const ans = isPalindrome(121);
    expect(ans).toEqual(true);
  });

  test('example 2', () => {
    const ans = isPalindrome(-121);
    expect(ans).toEqual(false);
  });

  test('example 3', () => {
    const ans = isPalindrome(10);
    expect(ans).toEqual(false);
  });
});
