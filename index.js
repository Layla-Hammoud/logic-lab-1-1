//Exercice 1 A
const SeekAndSwap = (array) => {
  const startingTime = performance.now();
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  const EndingTime = performance.now();
  const timeTaken = EndingTime - startingTime;
  console.log(timeTaken);
  return array;
};
// console.log(SeekAndSwap([3, 5, 4, 21, 0, -1]))

//Exercice 1 B
const SlideToLeft = (array) => {
  const startingTime = performance.now();
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  const EndingTime = performance.now();
  const timeTaken = EndingTime - startingTime;
  console.log(timeTaken);
  return array;
};
// console.log(SlideToLeft([3, 5, 4, 21, 0, -1]));

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};
//Exercice 2
const initialize2DArray = () => {
  let array = [];
  for (let i = 0; i < 3; i++) {
    array.push([]);
    for (let j = 0; j < 5; j++) {
      array[i].push(generateRandomNumber());
    }
    console.log(`row ${i + 1} -> ${array[i]}`);
  }
  return array;
};
// console.log(initialize2DArray());
//Exercice 3
const initialize2DSquareArray = () => {
  let array = [];
  let sumDiagonals = 0;
  for (let i = 0; i < 5; i++) {
    array.push([]);
    for (let j = 0; j < 5; j++) {
      array[i].push(generateRandomNumber());
    }
    sumDiagonals += array[i][i];
  }
  console.log(array);
  return `the sum of the dioganals ${sumDiagonals}`;
};
//console.log(initialize2DSquareArray());
//Exercice 4
const array4 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [-1, 4, 6, 1, 7],
  [3, 6, 1, 0, -7],
  [-1, 5, 2, 6, 9],
];
const findNumberIn2DArray = (number) => {
  for (let i = 0; i < array4.length; i++) {
    for (let j = 0; j < array4[i].length; j++) {
      if (number == array4[i][j]) {
        return `its position is at row ${i+1} and column ${j+1}`;
      }
    }
  }
  return `not found`;
};
console.log(findNumberIn2DArray(9))