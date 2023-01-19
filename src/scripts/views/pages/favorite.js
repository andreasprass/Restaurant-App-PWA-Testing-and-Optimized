import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {

  async render() {
    return `
      <div class="content" id="favoriteKonten">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="restos" class="restos">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const favData = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#restos');

    favData.forEach((resto) => {
      moviesContainer.innerHTML += createRestaurantListTemplate(resto);
    });
  },
};

export default Favorite;
