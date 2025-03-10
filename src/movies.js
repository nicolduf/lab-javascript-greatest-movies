// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directorsArr = moviesArray.map((oneMovie) => {
    return oneMovie.director;
  });

  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  }

  const dramaMoviesBySteven = moviesArray.filter((movie) => {
    const moviesBySteven = movie.director === "Steven Spielberg";
    const isMovieDrama = movie.genre.indexOf("Drama") >= 0;

    return moviesBySteven && isMovieDrama;
  });

  return dramaMoviesBySteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const sumOfScore = moviesArray.reduce((accumulator, movie) => {
    if (movie.score) return accumulator + movie.score;
    else {
      return accumulator;
    }
  }, 0);

  const averageScore = sumOfScore / moviesArray.length;
  return +averageScore.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  averageScore = scoresAverage(dramaMovies);
  return averageScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const deepCopyArr = JSON.parse(JSON.stringify(moviesArray));
  const sorted = deepCopyArr.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        0;
      }
    }
  });

  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copyArr = JSON.parse(JSON.stringify(moviesArray));
  const sortedAlpha = copyArr.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });

  const titlesArr = sortedAlpha.map((movie) => movie.title);
  const first20 = titlesArr.slice(0, 20);
  return first20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
