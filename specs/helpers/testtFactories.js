import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";
import FavoriteMovieIdb from '../../src/scripts/data/favorite-movie-idb';

const createLikeButtonPresenterWithMovie = async (restaurant) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteMovieIdb,
        restaurant,
    });
}

export { createLikeButtonPresenterWithMovie };