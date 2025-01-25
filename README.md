# Stack Overflow Bug in JavaScript

This repository demonstrates a common error in JavaScript: stack overflow caused by uncontrolled recursion. The `foo` function recursively calls itself without a proper base case for large inputs, leading to excessive function calls and ultimately a stack overflow.

## Bug Description

The `bug.js` file contains a function `foo` that recursively calls itself.  The recursion is not properly bounded.  When the input `a` is a large number, the recursive calls continue until the call stack is exhausted, resulting in a stack overflow error.

## Solution

The `bugSolution.js` file provides a solution by adding an appropriate base case to the recursion to prevent it from continuing indefinitely when large numbers are provided as input.