#!/usr/bin/env node
'use strict';

function factorial(number) {
  if (number <= 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

function factorial_i(number) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

for (let i = 1; i <= 20; i++) {
  console.log(`Factorial   ${ i } = ${ factorial(i) }`);
  console.log(`Factorial_i ${ i } = ${ factorial_i(i) }`);
}
