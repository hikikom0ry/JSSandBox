'use strict';

 
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        
        while(personalMovieDB.count == '' || personalMovieDB.count == null ||isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько его оцените?', '');
    
            if (a != '' && a != null && a.length < 50 && b != '' && b != null ) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                i--;
                console.log('error');
            }   
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
            alert('Вы классический зритель');
        } else {
            alert('Вы киноман');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) { 
            let genre;  
            do {
                genre = prompt(`Ваш любимый жанр под номером ${i + 1}`,'');
                if (genre == '' || genre == null) {
                    console.log('Вы ввели некорректные данные или не ввели их вовсе');
                }
            } while (genre == '' || genre == null);
            personalMovieDB.genres[i] = genre;
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });

    },
    
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }

};
personalMovieDB.writeYourGenres();













