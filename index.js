#!/usr/bin/env node
'use strict';

function factorial(number) {
  let result = 1;
  let chain = Promise.resolve();
  for (let i = number; i >= 1; i--) {
    chain = chain.then(function() {
      return result *= i;
    });
  }
  return chain;
}

for (let i = 1; i <= 150; i++) {
  factorial(i).
    then(function(result) {
      console.log(`Factorial ${ i } = ${ result }`);
    });
}
