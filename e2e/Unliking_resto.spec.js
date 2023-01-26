const assert = require("assert");

Feature("Unliking resto");

Before(({ I }) => {
    I.amOnPage("/");
})

Scenario("unliking one resto", async ({ I }) => {
    I.waitForElement('.resto__title a', 5);
    I.seeElement('.resto__title a');

    const firstFilm = locate('.resto__title a').first();
    const firstFilmTitle = await I.grabTextFrom(firstFilm);
    I.click(firstFilm);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item');

    const likedFilmTitle = await I.grabTextFrom('.resto__title');
    const likedFilm = locate(".resto__title a").first();
    assert.strictEqual(firstFilmTitle, likedFilmTitle);

    I.click(likedFilm);
    pause

    I.seeElement("#likeButton");
    I.click("#likeButton");

    I.amOnPage("/#/favorite");
    I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found');
    
})