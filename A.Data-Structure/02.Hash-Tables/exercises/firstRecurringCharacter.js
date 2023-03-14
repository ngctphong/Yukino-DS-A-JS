//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

firstRecurringCharacter = {};

function findFirstRecurringCharacter(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (findFirstRecurringCharacter[arr[i]]) {
      return arr[i];
    }

    findFirstRecurringCharacter[arr[i]] = 1;
  }

  console.log(findFirstRecurringCharacter);

  return undefined;
}

// const array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// const array = [2,1,1,2,3,5,1,2,4];
// const array = [2, 3, 4, 5];

console.log(findFirstRecurringCharacter(array));
