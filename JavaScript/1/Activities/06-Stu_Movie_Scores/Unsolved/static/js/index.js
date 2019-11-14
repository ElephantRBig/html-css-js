// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;
var goodSum = 0;
var okSum = 0;
var badSum = 0;

for (var j =0; j<movieScores;j++){
  if (movieScore<5){
    goodMovieScores.push(movieScores[j])
  }
  else if (movieScores >= 5 && movieScores<= 7){
    okMovieScores.push(movieScores[j])
  }
  else if (movieScores>7){
    badMovieScores.push(movieScores[j])
  }
  sum = sum + movieScores[j]
}

var average  = sum/movieScores.length

console.log(average)

console.log(`There were ${goodMovieScores.length} good movies, ${okMovieScores} ok movies and ${badMovieScores} bad movies.`)
console.log(`The over total score for good movies is ${goodSum}, for ok movies, ${okSum}, for bad movies ${badSum}`)


// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];
