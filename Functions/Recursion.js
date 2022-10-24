function isEven(num) {
  if (num < 0) return false;
  if (num == 2) return true;
  else if (num == 1) return false;
  return isEven(num - 2);
}

console.log(isEven(-1));
