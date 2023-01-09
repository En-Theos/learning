"use strict";
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        let numberOfFilms = prompt("Скільки фільмів ви уже подивились?");
        while (true) {
            if (typeof numberOfFilms === 'string') {
                if (numberOfFilms.match(/\d/g)) {
                    this.count = numberOfFilms;
                    break;
                }
                else {
                    numberOfFilms = prompt("Значення повино бути числовим");
                }
            }
            else {
                numberOfFilms = prompt("Введіть значення");
            }
        }
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let name = prompt("Один із останіх переглянутих фільмів?");
            while (true) {
                if (typeof name === 'string' && name !== '' && name.length <= 50) {
                    this.movies[name] = 0;
                    break;
                }
                else {
                    name = prompt("Введіть назву не довшу 50 символів");
                }
            }
            let rate = prompt("На скільки ви його оцінете?");
            while (true) {
                if (typeof rate === 'string') {
                    if (rate.match(/\d/g)) {
                        this.movies[name] = rate;
                        break;
                    }
                    else {
                        rate = prompt("Значення повино бути числовим");
                    }
                }
                else {
                    rate = prompt("Введіть оцінку");
                }
            }
        }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert("Переглянуто досить мало фільмів");
        }
        else if (personalMovieDB.count <= 30) {
            alert("Ви класичний глядач");
        }
        else if (personalMovieDB.count > 30) {
            alert("Ви кіноман");
        }
    },
    showMyDB() {
        if (!this.privat) {
            console.log(this);
        }
        else {
            console.log("Користувач приватний");
        }
    },
    writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            let genre = prompt("Ваш улюблений жанр?");
            while (true) {
                if (typeof genre === 'string' && genre !== '') {
                    this.genres.push(genre);
                    break;
                }
                else {
                    genre = prompt("Введіть коректне значення");
                }
            }
        }
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
