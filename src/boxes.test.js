/* eslint-disable id-length */
/* 
Boxes
As the owner of an online store, you need to fulfill orders everyday. To optimize the packing of each order, you decide to write an algorithm to match boxes and items based on their respective sizes.

You have access to the following two boxes:

- A medium box (identifier: M)
- A large box (identifier: L)

When possible, you should try to fit multiple items in the same box but boxes can only contain one type of product. This is the list of items you sell along with associated boxes:

- Camera (identifier: Cam): one can fit in a medium box, and up to two can fit in a large box
- Gaming Console (identifier: Game): too big for a medium box, but up to two can fit in a large box
- Bluetooth speaker (identifier: Blue): one can fit in a large box

Your goal is to design a function that takes a list of items and returns the box & item matches (examples below).

Your solution should work for any number of each item greater than or equal to zero.

Input/Output expectations
["Cam"] -> [M: ["Cam"]]
["Cam", "Game"] -> [M: ["Cam"], L: ["Game"]]
["Game", "Blue"] -> [L: ["Game"], L : ["Blue"]]
["Game", "Game", "Blue"] -> [L: ["Game", "Game"], L : ["Blue"]]
["Cam", "Cam", "Game", "Game"] -> [L: ["Cam", "Cam"], L: ["Game", "Game"]]
["Cam", "Cam", "Cam", "Game", "Game", "Game", "Cam", "Blue"] -> [L: ["Cam", "Cam"], L: ["Cam", "Cam"], L: ["Game", "Game"], L: ["Game"], L: ["Blue"]]
["Cam", "Cam", "Cam", "Game", "Game", "Cam", "Cam", "Blue", "Blue"] -> [L: ["Cam", "Cam"] , L: ["Cam", "Cam"] , M: ["Cam"] , L: ["Game", "Game"] , L: ["Blue"] , L: ["Blue"]]

The sorting of the output can be different as long as its content is identical.
 */

const inventory = [
  {name: 'Cam', m: 1, l: 2},
  {name: 'Game', m: 0, l: 2},
  {name: 'Blue', m: 0, l: 1},
];

// Count number of each items in the order and return back as an object
const getReducedItems = (items) => {
  return items.reduce(function (obj, item) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});
};

/**
  Generate a list of boxes and their contents
*/
const getBoxes = (items) => {
  // Handle edge case
  if (items.length < 1) {
    return [];
  }

  const result = [];

  // Count number of each item
  const order = getReducedItems(items);

  // Loop through each order item and sort into appropriate sized boxes
  Object.keys(order).forEach((itemName) => {
    // How many items can fit in each size box?
    const {m, l} = inventory.find((i) => i.name === itemName);

    let numToSend = order[itemName];

    while (numToSend > 0) {
      if (numToSend <= m) {
        // Try to fill number of medium boxes first
        result.push({M: Array(m).fill(itemName)});
        numToSend -= m;
      } else if (numToSend >= l) {
        // Fill in with any large
        result.push({L: Array(l).fill(itemName)});
        numToSend -= l;
      } else {
        // Use a single large box if necessary
        result.push({L: Array(1).fill(itemName)});
        numToSend--;
      }
    }
  });

  return result;
};

describe('boxes', () => {
  test('example 1', () => {
    const ans = getBoxes(['Cam']);
    expect(ans).toEqual([{M: ['Cam']}]);
  });
  test('example 2', () => {
    const ans = getBoxes(['Cam', 'Game']);
    expect(ans).toEqual([{M: ['Cam']}, {L: ['Game']}]);
  });
  test('example 3', () => {
    const ans = getBoxes(['Game', 'Blue']);
    expect(ans).toEqual([{L: ['Game']}, {L: ['Blue']}]);
  });
  test('example 4', () => {
    const ans = getBoxes(['Game', 'Game', 'Blue']);
    expect(ans).toEqual([{L: ['Game', 'Game']}, {L: ['Blue']}]);
  });
  test('example 5', () => {
    const ans = getBoxes([
      'Cam',
      'Cam',
      'Cam',
      'Game',
      'Game',
      'Cam',
      'Cam',
      'Blue',
      'Blue',
    ]);
    expect(ans).toEqual([
      {L: ['Cam', 'Cam']},
      {L: ['Cam', 'Cam']},
      {M: ['Cam']},
      {L: ['Game', 'Game']},
      {L: ['Blue']},
      {L: ['Blue']},
    ]);
  });
});
