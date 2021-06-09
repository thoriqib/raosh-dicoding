import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
