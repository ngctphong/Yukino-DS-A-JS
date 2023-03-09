const myArr1 = [0, 3, 4, 5, 6, 31, 67];
const myArr2 = [4, 6, 30];

function mergeSortedArrays(arr1 = myArr1, arr2 = myArr2) {
  const arr1Length = arr1.length;
  const arr2Length = arr2.length;
  const finalArray = [];
  let i = j = 0;

  while (i < arr1Length || j < arr2Length) {
    if (arr1[i] <= arr2[j]) {
      finalArray.push(arr1[i]);
      i++;
      continue;
    } else if (arr1[i] > arr2[j]) {
      finalArray.push(arr2[j]);
      j++;
      continue;
    } 

    let element = arr1[i] || arr2[j];
    i++; j++;
    finalArray.push(element);
  }

  return finalArray;
}

const finalArray = mergeSortedArrays();
console.log(finalArray);