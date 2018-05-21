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

function stopwatch(func, value) {
  const start = Date.now();

  const result = func.apply(this, [ value ]);

  const time = Date.now() - start;

  console.log(time, start, Date.now());

  return [ result, time ];
}

for (let i = 1; i <= 2000; i++) {
  const [ resultR, timeR ] = stopwatch(factorial, i);
  const [ resultI, timeI ] = stopwatch(factorial, i);

  console.log(`Factorial   ${ i } = ${ resultR } (${ timeR }ms)`);
  console.log(`Factorial_i ${ i } = ${ resultI } (${ timeI }ms)`);
}
