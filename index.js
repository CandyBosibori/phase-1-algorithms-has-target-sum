// Runtime: O(n)
function hasTargetSum(array, target) {
  const seenNumbers = {};

  for (const number of array) {
    // n steps
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }

  return false;
}

// Runtime: O(n^2)
// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === complement) return true;
//     }
//   }

//   return false;
// }

// O(n) runtime
function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}

// O(1) runtime
function findSock(object) {
  if (object.sock) return "sock";
}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 7, 4], 6));
}

module.exports = hasTargetSum;