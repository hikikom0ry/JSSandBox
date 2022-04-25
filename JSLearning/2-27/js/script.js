'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      inputForm = document.querySelector('form.add'),
      inputField = inputForm.querySelector('.adding__input'),
      checkFavorite = inputForm.querySelector("[type='checkbox']"),



adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = "url('img/bg.jpg')";

movieList.innerHTML = "";
movieDB.movies.sort();



inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let filmNameLength = inputField.value.length;
    if (filmNameLength > 21) {
        movieDB.movies.push(`${inputField.value.substr(0, 21)}...`);
    } else {
        movieDB.movies.push(inputField.value);
    }
    addToFavorite();
    inputForm.reset();
    updateMovieList();
});

function sortMovieList() {
    for (let i = 0; i < (movieDB.movies.length); i++) {
        movieDB.movies[i] = movieDB.movies[i].toLowerCase();
    }
    console.log(movieDB.movies);
    movieDB.movies.sort();
}

function updateMovieList() {
    movieList.innerHTML='';
    sortMovieList();
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach(item, i)
    addEventListener('click', event =>{
        event.target.parentElement.remove();
    });
}

function addToFavorite(){
   if (checkFavorite.checked) {
       console.log('Добавляем любимый фильм');
   }
}





updateMovieList();