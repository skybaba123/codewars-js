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

//Simple, given a string of words, return the length of the shortest word(s).
function findShort(s){
  return s.split(' ').map(s => s.length).reduce((a, b) => Math.min(a, b));  
}

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  return l.filter(n => typeof n === 'number');
}

//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.
function arrayDiff(a, b) {
  return [...a].filter((a) => ![...b].includes(a));
}
