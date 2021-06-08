import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import * as json from '../DATA.json';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

const restaurantData = json.default.restaurants;
const cardList = document.querySelector('.cards');

const getStar = (element) => {
  let star = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Math.floor(element.rating); i++) {
    star += '<i class="bi bi-star-fill"></i>';
  }
  return star;
};

const getCard = (data) => {
  let cards = '';
  data.forEach((element) => {
    const star = getStar(element);
    cards += `<li class="cards_item">
    <div class="card">
      <div class="card_image">
        <img src=${element.pictureId} alt=${element.name}/>
      </div>
      <div class="card_content">
        <div class="card_label">
          <div class="card_rating">${star}<span style="color: white;">${element.rating}</span></div>
          <div class="card_city">${element.city}</div>
        </div>
        <h2 class="card_title">${element.name}</h2>
        <p class="card_text">${element.description}</p>
        <button class="btn card_btn">Read More</button>
      </div>
    </div>
  </li>`;
  });
  return cards;
};

cardList.innerHTML = getCard(restaurantData);
