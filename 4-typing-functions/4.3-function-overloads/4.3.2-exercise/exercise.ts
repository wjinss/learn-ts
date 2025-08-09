// Exercise 1: Create function overloads for a function named `getLength`
// that can take either a string or an array and return their length.

function getLength(value: string): number;
function getLength(value: any[]): number;

function getLength(value: any) {
  return value.length;
}

// Test your implementation:
getLength("TypeScript"); // 10
getLength([1, 2, 3, 4, 5]); // 5

console.log(getLength("TypeScript"));
console.log(getLength([1, 2, 3, 4, 5]));
