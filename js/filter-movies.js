import { Movies, votes } from "./films.js";

class Filter extends Movies {
    setMovies = async () => {
        return this.sendRequest()
            .then(res => res)
            .catch(e => console.log('Oops! Is your server disconnected!?'));
    }
    filterMovies = async () => {
        let response = await this.setMovies();
        function setFilter() {  //it gets response variable data from filterMovies function scope
            response.results.forEach(option =>
                votes.add(
                    new Option(option.vote_average)
                )
            );
            votes.onchange = function () {
                let list_el = document.getElementById('card-cont');

                let items = list_el.getElementsByClassName('card');
                for (let i = 0; i < items.length; i++) {
                    if (items[i].classList.contains(this.value)) {
                        items[i].style.display = 'block';
                    } else if (this.value === 'All Votes Averages' && items[i].style.display === 'none') {
                        items[i].style.display = 'block';
                    } else {
                        items[i].style.display = 'none';
                    }
                }
            };
        }
        setFilter();
    }
}

export { Filter };