$(document).ready(function () {
    console.log('ready');

    $.get('https://swapi.co/api/people/', function (response) {
        var people = response.results;

        people.forEach(function (el) {
            //console.log(el);
            $('.cards').html('');
            $.get(el.homeworld, function (responsehomeworld) {
                // console.log("planete : " + responsehomeworld.name);
                $('.cards').append(
                    card(el, responsehomeworld)
                );
            })
        });
    })

    function card(el, responsehomeworld) {
        return (`<div class="card">
        <h3>${el.name}</h3>
        <p>Taille : ${el.height}</p>
        <p>Poids : ${el.mass}</p>
        <p>Date de naissance : ${el.birth_year}</p>
        <p>Couleur des yeux : ${el.eye_color}</p>
        <p>Couleur des cheveux : ${el.hair_color}</p>
        <p>Espèce : ${el.species}</p>
        <div class="tooltip">Planete d'origine : ${responsehomeworld.name}
        <span class="tooltiptext">
        <h5>${responsehomeworld.name}</h5>
        <p>Climat : ${responsehomeworld.climate}</p>
        <p>Population : ${responsehomeworld.population}</p>
        <p>Diametre : ${responsehomeworld.diameter}</p>
        </span></div>
        <h4>Films : </h4>
        <span>
   
        </span>
        <h4>Vaisseaux : </4>
        <p>${el.starships}</p>
        </div>`)
    }
    function loadMovies(films) {
        //console.log(films);
        films.forEach(function (film) {
            //console.log(film)
            $.get(film, function (titleFilm) {
                let oneFilm = `<p>${nameFilm.title}</p>`;
                //console.log("nameFilm du get : " + nameFilm);
                //console.log("balise p du get : " + `<p>${nameFilm.title}</p>`);
                console.log(oneFilm);
            })
        })
        return oneFilm;
    }

})