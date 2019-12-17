/* eslint-disable */

arr = [
  'Hello world', // -> "world Hello"
  'I hate doing technical tests', // -> "tests technical doing hate I"
  'Holaluz is a great place to work', // -> "work to place great a is Holaluz"
];

function reverseWordsInSentence(str) {
  let splitString = str.split(' ');
  let newString = '';
  for (let i = splitString.length - 1; i >= 0; i--) {
    newString += `${splitString[i]  } `;
  }
  return newString;
}

for (let i in arr) {
  reverseWordsInSentence(arr[i]);
}

