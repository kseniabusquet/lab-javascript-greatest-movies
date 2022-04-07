const movies = require('../src/data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const result = arr.map((element, index) => arr[index].director)
  
  // removing duplicates
  let noDuplicates = result.filter((element, index) => {
    return result.indexOf(element) === index;
  });
    return noDuplicates;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const result = arr.filter((element, index) => ((arr[index].director === "Steven Spielberg") 
  && (arr[index].genre.includes("Drama"))));
  return result.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// TO DO: empty key / empty object

function scoresAverage(arr) {
if (!arr.length) return 0;

const arrayWithoutEmptyValues = [];

//checking for empty values
arr.forEach(element => {
if ((!("score" in element)) || (element.score === "")) element.score = 0;
arrayWithoutEmptyValues.push(element);
});

//calculating the sum
let sum = arrayWithoutEmptyValues.reduce ((previousValue, currentValue) => previousValue + currentValue.score, 0);

//returning the avg rounded to 2 decimals
return Math.round(sum/arrayWithoutEmptyValues.length*100)/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
const result = arr.filter((element, index) => ((arr[index].genre.includes("Drama"))));
return scoresAverage(result);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//If year is the same, order by title
function orderByYear(arr) {
  let result = [];
  arr.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1 )
  arr.forEach((element, index) => {
    result.push(arr[index]);
  });
  return result;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const result = arr.map((element, index) => arr[index].title);
  result.sort((a, b) => (a > b) ? 1 : -1);

//checking the length
  let newArr = [];
  if (result.length < 20) return result;
  else if (result.length >= 20) {
    for (i = 0; i < 20; i++){
      newArr.push(result[i]);
    }
    return newArr;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const clonedArr = arr.slice(0);
  durationArr = [];
  
  arr.forEach((element) => {
    durationArr.push(element.duration);
  });
  
  let durationInMin = [];
  
  clonedArr.forEach((element, index) => {
    let str = element.duration.split(" ");
    durationInMin.push(parseInt(str[0],10)*60 + parseInt(str[1],10))
  })
  
  for (i = 0; i < clonedArr.length; i++){
  clonedArr[i].duration = durationInMin[i];
  }

  return clonedArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
