/*
21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

*/

const mergeTwoLists = (list1, list2) => {
  const dummy = {next: null};
  let cur = dummy;
  while (list1 && list2) {
    list1.val < list2.val
      ? ((cur.next = list1), (list1 = list1.next))
      : ((cur.next = list2), (list2 = list2.next));
    cur = cur.next;
  }

  cur.next = list1 || list2;
  return dummy.next;
};

// TODO: Complete implementation
describe.skip('merge-two-sorted-lists', () => {
  test('example 1', () => {
    const ans = mergeTwoLists([1, 2, 4], [1, 3, 4]);
    expect(ans).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test('example 2', () => {
    const ans = mergeTwoLists([], []);
    expect(ans).toEqual([]);
  });

  test('example 3', () => {
    const ans = mergeTwoLists([], [0]);
    expect(ans).toEqual([0]);
  });
});
