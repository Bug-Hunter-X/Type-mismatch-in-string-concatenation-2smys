function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 5); // result2 is 5

// Corrected using template literals for type safety
console.log(`The sum is: ${result1}`);
console.log(`The difference is: ${result2}`);