/*Challenge
Instruction
Complete the logic in the function judgeVegetable.

For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

If we called the function with the following arguments.

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)

*/

/*const judgeVegetable = function (vegetables, metric) {
  let winner = 0
  if (metric === 'redness'){
    vegetables.forEach((x,i) => vegetables[i].redness > winner ? winner = vegetables[i].redness : 0);
    const winIndex = vegetables.map(e => e.redness).indexOf(winner);
    return vegetables[winIndex].submitter;
  } else if (metric === 'plumpness') {
    vegetables.forEach((x,i) => vegetables[i].plumpness > winner ? winner = vegetables[i].plumpness : 0);
    const winIndex = vegetables.map(e => e.plumpness).indexOf(winner);
    return vegetables[winIndex].submitter;
  }
}*/

const judgeVegetable = function (vegetables, metric) {
  let winner = 0;
  vegetables.forEach((x,i) => vegetables[i][metric] > winner ? winner = vegetables[i][metric] : false);
  console.log(winner);
  const winIndex = vegetables.map(e => e[metric]).indexOf(winner);
  console.log(winIndex);
  return vegetables[winIndex].submitter;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 14,
    plumpness: 3
  }
]

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric));
