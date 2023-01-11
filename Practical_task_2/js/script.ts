interface IMovieDB {
    movies: string[]
}

const movieDB: IMovieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelectorAll(".promo__adv img").forEach(item => item.remove());

let genre:Element | null =  document.querySelector(".promo__content .promo__bg .promo__genre");
if (genre instanceof HTMLDivElement) {
    genre.textContent = "ДРАМА";
}

let poster:Element | null = document.querySelector(".promo__content .promo__bg");
if (poster instanceof HTMLDivElement) {
    poster.style.background = "url('./img/bg.jpg') center center/cover no-repeat";
}

let parentFilms:Element | null = document.querySelector(".promo__interactive .promo__interactive-list");
if (parentFilms instanceof Element) {
    parentFilms.innerHTML = '';

    movieDB.movies.forEach((item, i) => {
        parentFilms!.innerHTML += `
            <li class="promo__interactive-item">${i+1}: ${item}
                <div class="delete"></div>
            </li>
        `
    });
}