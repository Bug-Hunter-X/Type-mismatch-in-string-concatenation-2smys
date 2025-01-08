# Type Mismatch in String Concatenation (TypeScript)

This repository demonstrates a common error in TypeScript: type mismatch during string concatenation.

## The Bug

The `bug.ts` file contains a function that performs addition and subtraction, then attempts to display results using string concatenation. This leads to unexpected behavior because TypeScript's type system doesn't catch this specific issue. The program will compile and run but might produce unexpected results. In this example, numbers are directly concatenated to strings using the '+' operator.  While this compiles successfully due to type coercion, it is not type-safe.

## The Solution

The `bugSolution.ts` file provides a corrected version using template literals. Template literals offer type safety by embedding variables directly into strings, eliminating the ambiguity of the '+' operator when used with different types. This approach maintains type safety and prevents unexpected behavior.