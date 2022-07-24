"use strict";

const numberOfFilms = +prompt('How many movies have you seen already?','');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    private: false
};

const a = prompt('Whats the last movie you saw?',''),
      b = prompt('Rate the movie',''),
      c = prompt('Whats the last movie you saw',''),
      d = prompt('Rate the movie','');

personalMovieDB.movies[a]= b;
personalMovieDB.movies[c]= d;

console.log(personalMovieDB);
