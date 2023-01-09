type strngOrNull = string | null;

const personalMovieDB: {
    count: number,
    movies: Record<string, number>,
    actors: {},
    genres: string[],
    privat: boolean,
    start: () => void,
    rememberMyFilms: () => void,
    detectPersonalLevel: () => void,
    showMyDB: () => void,
    writeYourGenres: () => void;
} = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        let numberOfFilms: strngOrNull = prompt("Скільки фільмів ви уже подивились?");
        
        while(true) {
            if (typeof numberOfFilms === 'string') {
                if (numberOfFilms.match(/\d/g)) {
                    this.count = numberOfFilms as unknown as number;
                    break;
                } else {
                    numberOfFilms = prompt("Значення повино бути числовим");
                }
            } else {
                numberOfFilms = prompt("Введіть значення");
            }
        }
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let name: strngOrNull = prompt("Один із останіх переглянутих фільмів?");
            while(true) {
                if (typeof name === 'string' && name !== '' && name.length <= 50) {
                    this.movies[name] = 0;
                    break;
                } else {
                    name = prompt("Введіть назву не довшу 50 символів");
                }
            }
        
            let rate: strngOrNull = prompt("На скільки ви його оцінете?");
            while(true) {
                if (typeof rate === 'string') {
                    if (rate.match(/\d/g)) {
                        this.movies[name] = rate as unknown as number;
                        break;
                    } else {
                        rate = prompt("Значення повино бути числовим");
                    }
                  
                } else {
                    rate = prompt("Введіть оцінку");
                }
            }
        }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert("Переглянуто досить мало фільмів");
        } else if (personalMovieDB.count <= 30) {
            alert("Ви класичний глядач");
        } else if (personalMovieDB.count > 30) {
            alert("Ви кіноман");
        }
    },
    showMyDB() {
        if (!this.privat) {
            console.log(this);
        } else {
            console.log("Користувач приватний");
        }
    },
    writeYourGenres() {
        for (let i: number = 0; i < 3; i++) {
            let genre: string | null = prompt("Ваш улюблений жанр?");

            while (true) {
                if (typeof genre === 'string' && genre !== '') {
                    this.genres.push(genre);
                    break;
                } else {
                    genre = prompt("Введіть коректне значення");
                }
            }            
        }
    }
}
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();