function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 5); // result2 is 5

// This will cause an error because 'result1' is a number, not a string.
console.log("The sum is: " + result1);
console.log("The difference is: " + result2);