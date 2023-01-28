/* eslint-disable class-methods-use-this */
import { createRestaurantListTemplate } from '../../templates/template-creator';

class FavoriteMovieSearchView {
  getTemplate() {
    return `
    <picture class="hero">
      <source media="(max-width: 600px)" srcset="hero-image-small.jpg">
      <img class="lazyload" src="hero-image-large.jpg" alt="resto-poster">
    </picture>
    <div class="content" id="homeKonten">
      <h2 class="content__heading">Restaurant List</h2>
      <div id="restos" class="restos">
      
      </div>
    </div>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showMovies(movies) {
    this.showFavoriteMovies(movies);
  }

  showFavoriteMovies(movies = []) {
    let html;
    if (movies.length) {
      html = movies.reduce((carry, movie) => carry.concat(createRestaurantListTemplate(movie)), '');
    } else {
      html = this._getEmptyMovieTemplate();
    }

    document.getElementById('restos').innerHTML = html;

    document.getElementById('restos').dispatchEvent(new Event('restos:updated'));
  }

  _getEmptyMovieTemplate() {
    return '<div class="resto-item__not__found restos__not__found">Tidak ada film untuk ditampilkan</div>';
  }
}

export default FavoriteMovieSearchView;
