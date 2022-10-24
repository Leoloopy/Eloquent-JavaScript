function countBs(stringcounter) {
  let count = 0;
  for (let i = 0; i < stringcounter.length; i++) {
    if (stringcounter.charAt(i) === "B") count++;
  }
  return count;
}

console.log(countBs("lazyBone"));

function countChars(stringcounter, letter) {
  let count = 0;
  for (let i = 0; i < stringcounter.length; i++) {
    if (stringcounter.charAt(i) === letter) count++;
  }
  return `There is ${count} ${letter}(s) in ${stringcounter}`;
}

console.log(countChars("Google", "o"));
