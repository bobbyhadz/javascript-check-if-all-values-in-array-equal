// EXAMPLE 1 - Check if all Values in an Array are Equal

const arr1 = [1, 1, 1];
const arr2 = [1, 1, 2];

function allAreEqual(array) {
  const result = array.every(element => {
    if (element === array[0]) {
      return true;
    }
  });

  return result;
}

console.log(allAreEqual(arr1)); // 👉️ true
console.log(allAreEqual(arr2)); // 👉️ false

if (allAreEqual(arr1)) {
  // 👇️ this runs
  console.log('All elements in the array are equal');
} else {
  console.log('Not all elements in the array are equal');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if all Values in an Array are Equal using a Set object

// const arr1 = [1, 1, 1];
// const arr2 = [1, 1, 2];

// function allAreEqual(array) {
//   const result = new Set(array).size === 1;

//   return result;
// }

// console.log(allAreEqual(arr1)); // 👉️ true
// console.log(allAreEqual(arr2)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if all Values in an Array are Equal using a `for...of` loop

// function allAreEqual(array) {
//   let areEqual = true;

//   for (const element of array) {
//     if (element !== array[0]) {
//       areEqual = false;
//       break;
//     }
//   }

//   return areEqual;
// }

// const arr = [0, 0, 0];
// const arr1 = [1, 1, 2];
// const arr2 = [1, 1, 1];

// console.log(allAreEqual(arr)); // 👉️ true
// console.log(allAreEqual(arr1)); // 👉️ false
// console.log(allAreEqual(arr2)); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if all Values in an Array are Equal using a `for` loop

// function allAreEqual(array) {
//   let areEqual = true;

//   for (let index = 0; index < array.length; index++) {
//     if (array[index] !== array[0]) {
//       areEqual = false;

//       break;
//     }
//   }

//   return areEqual;
// }

// const arr = [0, 0, 0];
// const arr1 = [1, 1, 2];
// const arr2 = [1, 1, 1];

// console.log(allAreEqual(arr)); // 👉️ true
// console.log(allAreEqual(arr1)); // 👉️ false
// console.log(allAreEqual(arr2)); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if all Values in an Array are Equal using `Array.filter()`

// function allAreEqual(array) {
//   return (
//     array.filter(element => {
//       return element === array[0];
//     }).length === array.length
//   );
// }

// const arr = [0, 0, 0];
// const arr1 = [1, 1, 2];
// const arr2 = [1, 1, 1];

// console.log(allAreEqual(arr)); // 👉️ true
// console.log(allAreEqual(arr1)); // 👉️ false
// console.log(allAreEqual(arr2)); // 👉️ true
