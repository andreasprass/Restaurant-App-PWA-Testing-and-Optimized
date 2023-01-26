import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import FavoriteMovieSearchView from './liked-movies/favorite-movie-search-view';
import FavoriteMovieShowPresenter from './liked-movies/favorite-movie-show-presenter';

const view = new FavoriteMovieSearchView();

const Favorite = {
	async render() {
		return view.getTemplate();
	},
	async afterRender() {
		new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovieIdb });
	}
};

export default Favorite;
