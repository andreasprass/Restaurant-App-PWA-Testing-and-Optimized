import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';
import * as TestFactories from '../specs/helpers/testtFactories';

describe('Liking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

	it('should show the like button when the restaurant has not been liked before', async () => {

		await TestFactories.createLikeButtonPresenterWithMovie({ id:1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeTruthy();
	});

    it('should not show the unlike button when the restaurant has not been liked before', async () => {

        await TestFactories.createLikeButtonPresenterWithMovie({ id:1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeFalsy();
    });

    it('should be able to like the restaurant', async () => {
        
        await TestFactories.createLikeButtonPresenterWithMovie({ id:1 });
     
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        
        const movie = await FavoriteMovieIdb.getMovie(1);
        expect(movie).toEqual({ id: 1 });
     
        FavoriteMovieIdb.deleteMovie(1);
      });


      //-----------------------
      it('should not add a restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithMovie({ id:1 });

        // Tambahkan film dengan ID 1 ke daftar film yang disukai
        await FavoriteMovieIdb.putMovie({ id: 1 });
        // Simulasikan pengguna menekan tombol suka film
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        // tidak ada film yang ganda
        expect(await FavoriteMovieIdb.getAllMovies()).toEqual([{ id: 1 }]);

        FavoriteMovieIdb.deleteMovie(1);
    });

    it('should not add a restaurant when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithMovie({  });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteMovieIdb.getAllMovies()).toEqual([]);
    });

});
