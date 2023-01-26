import CONFIG from '../../globals/config';

const createRestaurantListTemplate = (restaurants) => `
<div class="resto-item">
  <div class="resto-item__header">
    <img class="resto-item__header__poster lazyload" alt="${restaurants.name} image"
        data-src="${restaurants.pictureId ? CONFIG.BASE_IMAGE_URL + restaurants.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
  </div>
  <div class="resto-item__content">
    <h5>${restaurants.city}</h5>
    <h3 class="resto__title"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3><p class="rating">Rating ⭐️ ${restaurants.rating}</p>
    <p>${restaurants.description}</p>
  </div>
</div>
`;

const createRestaurantDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>

  <img class="resto__poster lazyload" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : resto.pictureId}" />
  
  <div class="resto__info">
    <h3>Restaurant Details</h3>
      <h4>Rating</h4>
      <p>⭐️ ${resto.rating}</p>
      <h4>City</h4>
      <p>${resto.city}</p>
      <h4>Address</h4>
      <p>${resto.address}</p>
  </div>

  <div class="resto__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>

  <div class="resto__overview">
    <h3>Menu</h3>
    <p>
      ${resto.menus.foods.map((food) => `
        <div class="menu-item">
          <p>${food.name}</p>
        </div>`).join('')}
    </p>
  </div>

  <div class="resto__overview">
    <h3>Drink</h3>
    <p>
      ${resto.menus.drinks.map((drink) => `
        <div class="menu-item">
          <p>${drink.name}</p>
        </div>`).join('')}
    </p>
  </div>

  <div class="resto__overview">
    <h3>Review</h3>
    <p class="customer__name>
      ${resto.customerReviews.map((review) => `
        <div class="menu-item">
            <h3>${review.name}</h3><h5>${review.date}</h5>
            <p>${review.review}</p>
        </div>`).join('')}
    </p>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createRestaurantListTemplate,
};
