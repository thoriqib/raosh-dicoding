import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${restaurant.name}</p>
    <h4>Release Date</h4>
    <p>${restaurant.address}</p>
    <h4>Duration</h4>
    <p>${restaurant.city} minutes</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const getStar = (element) => {
  let star = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Math.floor(element.rating); i++) {
    star += '<i class="bi bi-star-fill"></i>';
  }
  return star;
};

const createRestaurantItemTemplate = (restaurant) => `
  <li class="cards_item">
    <div class="card">
      <div class="card_image">
        <img src=${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId} alt=${restaurant.name}/>
      </div>
      <div class="card_content">
        <div class="card_label">
          <div class="card_rating">${getStar(restaurant)}<span style="color: white;">${restaurant.rating}</span></div>
          <div class="card_city">${restaurant.city}</div>
        </div>
        <h2 class="card_title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
        <p class="card_text">${restaurant.description}</p>
      </div>
    </div>
  </li>
  `;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
