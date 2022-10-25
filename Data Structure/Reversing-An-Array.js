function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));

function reverseArrayInPlace(arr) {
  let loopTimes = Math.floor(arr.length / 2);
  let tempFirst,
    tempLast = 0;
  for (let f = arr.length - 1, l = 0; f >= loopTimes; f--, l++) {
    (tempLast = arr[l]), (tempFirst = arr[f]);
    (arr[f] = tempLast), (arr[l] = tempFirst);
  }
  return arr;
}

let arr1 = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arr1));
