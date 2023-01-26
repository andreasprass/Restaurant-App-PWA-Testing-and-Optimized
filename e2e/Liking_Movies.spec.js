const assert = require('assert');

Feature('Liking Movies');
 
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
 
Scenario('showing empty liked movies',  ({ I }) => {
  I.waitForElement('.resto-item__not__found', 5);
  I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found');
  I.amOnPage('/');
  
  I.seeElement('.resto__title a');

  const firstFilm = locate('.resto__title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const likedFilmTitle = await I.grabTextFrom('.resto__title');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});
