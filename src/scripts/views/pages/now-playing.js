import TheMovieDbSource from '../../data/themoviedb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';


const List = {

  async render() {
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
  },

  async afterRender() {
    const restaurants = await TheMovieDbSource.listRestaurants();
    const restaurantContainer = document.querySelector('#restos');

    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(resto);
    });
  },
};

export default List;
