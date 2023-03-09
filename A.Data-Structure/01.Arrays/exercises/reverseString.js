const myString = 'My name is Phong';

function reverse(str) {
  const stringToArr = str.split('');
  const length = stringToArr.length;
  
  for (let i = 0; i < length / 2; i++) {
    let temp = stringToArr[i]
    stringToArr[i] = stringToArr[length - 1 - i];
    stringToArr[length - 1 - i] = temp;
  }

  return stringToArr.join('');
}

const reverseString = reverse(myString);
console.log(reverseString);