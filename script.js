//multiply two numbers
function multiply(a, b){
return a * b
}

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
  const string = str.split('');
  let occurx = 0;
  let occuro = 0;
  string.forEach(element => {
    if (element === 'o' || element === 'O') {
      return `${element}: ${occuro++}`;
    }
    if (element === 'x' || element === 'X') {
      return `${element}: ${occurx++}`;
    }
  });
  if (occuro === occurx) {
    return true;
  } else {
    return false;
  }
}
