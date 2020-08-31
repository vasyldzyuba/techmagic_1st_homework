import { Movies } from "./films.js";
import { Filter } from "./filter-movies.js";

let actorsCard = document.getElementById('actors-card');

class Actors extends Movies {

    constructor(actorsArray) {
        super();
        this.actorsArray = actorsArray;
    }
    sendSwapRequest = async () => {
        return fetch('https://swapi.dev/api/people/')
            .then(res => res.json())
            .catch(e => console.log('Oops! Is your server disconnected!?'));
    }

    getActors = async () => {
        this.actorsArray = await this.sendSwapRequest();
        let response = this.actorsArray;
        function setActors() {   //it gets response variable data from getActors function scope
            response.results.map(item => {
                actorsCard.insertAdjacentHTML(
                    "afterend",
                    `<div class="card-star-wars">
            <div class="container">
                <h4 class="act-name">${item.name}</h4>
                <h4>Gender: ${item.gender}</h4>
                <h4>Height: ${item.height}</h4>
                <h4>Skin Color: ${item.skin_color}</h4>
                <h4>Eye Color: ${item.eye_color}</h4>
            </div>
            </div>`
                );
            })
        }
        setActors();
    }
    c
}

let actors = new Actors();
actors.getActors();

let filter = new Filter();
filter.filterMovies();
