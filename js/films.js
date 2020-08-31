
let lastCard = document.getElementById('cont-item');
let votes = document.getElementById('votes');

class Movies {
    constructor(movie) {
        this.movie = movie;
    }
    sendRequest = async () => {
        return fetch('https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=62ea0c662081d0b490eb46e2ff1746ef')
            .then(resposne => resposne.json())
            .catch(e => console.log('Oops! Is your server disconnected!?'));
    }
    getFilms = async () => {
        this.movie = await this.sendRequest();
        let response = this.movie;
        function setFilms() {
            response.results.map(item => {  //it gets response variable data from getFilms function scope
                lastCard.insertAdjacentHTML(
                    "afterend",
                    ` <div id="card" class="movie_card bright vote card ${item.vote_average}">
                         <div class="info_section ">
                            <div class="movie_header">
                                <img class="locandina" src="http://image.tmdb.org/t/p/w300/${item.poster_path}" />
                                <h3>${item.title}</h3>
                                <h5>Rating: ${item.vote_average}/10</h5>
                                <h5>Popularity: ${item.popularity}</h5>
                                 <h5>Release date: ${item.release_date}</h5>
                            </div>
                            <div class="movie_desc">
                                 <p class="text"><span>Movie Overview: </span>${item.overview} </p>
                            </div>
                          </div>
                     </div>`
                );
            })
        }
        setFilms();
    }
}

let movies = new Movies();
movies.getFilms();


export { Movies, votes };