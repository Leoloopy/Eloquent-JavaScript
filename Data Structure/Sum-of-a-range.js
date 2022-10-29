// sum of a range without a step
function sumRange(start, end) {
  let accumulator = 0;
  for (let i = 0; i < end; i++) {
    accumulator += start++;
  }
  return accumulator;
}

console.log(sumRange(1, 10));

// sum of a range with a step should return an array
// works with both positive and negative step integers

function sumOfARange(start, end, step = 1) {
  let arrayStep = [];
  let accumulator = start;
  if (start > end && step > 0) return [start];

  if (step > 0) {
    for (let i = 0; i <= end - 1; i += step) {
      arrayStep.push(accumulator);
      accumulator += start + step - 1;
    }
  }

  if (step < 0) {
    for (let i = start; i >= end; i -= -step) {
      arrayStep.push(accumulator);
      accumulator -= -step;
    }
  }

  return arrayStep;
}

console.log(sumOfARange(50, 10, -2));
