#!/usr/bin/env node
'use strict';

function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

for (let i = 1; i <= 150; i++) {
  console.log(`Factorial ${ i } = ${ factorial(i) }`);
}
