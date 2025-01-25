function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) {
    return b; // Handle negative numbers to avoid infinite recursion
  }
  return foo(a - 1, a + b);
}