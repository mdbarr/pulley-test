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

let number = 50000;
factorial(number).
  then(function(result) {
    console.log(`Factorial ${ number } = ${ result }`);
  });
