/*
14. Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

*/

/**
 * Find the longest common prefix string amongst an array of strings.
 *
 * @param {String[]} strs Array of lower case strings
 * @returns {String} of common prefix
 */

const longestCommonPrefix = (strs) => {
  // Grab the first item in the array of strings.
  const firstStr = strs[0];
  // Base condition
  if (!strs || strs.length === 0) {
    return '';
  }

  // Loop through each character of the first word.
  for (let char = 0; char < firstStr.length; char++) {
    // Loop through each word
    for (const item of strs) {
      // On first mismatch return the slice of the string
      if (item[char] !== firstStr[char]) {
        return item.slice(0, char);
      }
    }
  }

  // Handle the edge cases around empty and repeated strings
  return firstStr;
};

describe('longestCommonPrefix', () => {
  test('simple example', () => {
    const ans = longestCommonPrefix(['flower', 'flow', 'flight']);
    expect(ans).toEqual('fl');
  });

  test('repeated strings', () => {
    const ans = longestCommonPrefix(['flower', 'flower', 'flower', 'flower']);
    expect(ans).toEqual('flower');
  });

  test('no overlap', () => {
    const ans = longestCommonPrefix(['alpha', 'beta', 'gamma']);
    expect(ans).toEqual('');
  });

  test('Edge case of single char + single item', () => {
    const ans = longestCommonPrefix(['a']);
    expect(ans).toEqual('a');
  });

  test('Empty array', () => {
    const ans = longestCommonPrefix([]);
    expect(ans).toEqual('');
  });

  test('Empty strings', () => {
    const ans = longestCommonPrefix(['', '']);
    expect(ans).toEqual('');
  });
});
