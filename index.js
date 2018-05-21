#!/usr/bin/env node
'use strict';

function factorial(number) {
  if (number <= 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

for (let i = 1; i <= 20; i++) {
  console.log(`Factorial ${ i } = ${ factorial(i) }`);
}
