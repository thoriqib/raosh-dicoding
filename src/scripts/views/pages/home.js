import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <header class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Temukan Seleramu Disini</h1>

        <h2 class="hero-subtitle">
          Kami memberikan rekomendasi terbaik untukmu
        </h2>
      </div>
    </header>
    <main id="maincontent">
      <h1>Jelajahi Restoran</h1>
      <hr />
      <ul class="cards"></ul>

      <h1>Kata Pengguna</h1>
      <hr />

      <section class="list-testimoni">
        <div class="testimoni">
          <div class="person">
            <i class="bi bi-person-fill"></i>
            <h4>Maru Sueharu</h4>
          </div>
          <p>"Gak perlu susah buat makan enak"</p>
        </div>
        <div class="testimoni">
          <div class="person">
            <i class="bi bi-person-fill"></i>
            <h4>Ogiwara Sayu</h4>
          </div>
          <p>"Sangat membantu bangettt"</p>
        </div>
        <div class="testimoni">
          <div class="person">
            <i class="bi bi-person-fill"></i>
            <h4>Arima Ichika</h4>
          </div>
          <p>"Bakal terus pake ini. Mantap bangettt soalnyaaa"</p>
        </div>
      </section>
    </main>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantDbSource.listRestaurants();
    const restaurantsContainer = document.querySelector('.cards');
    restaurants.forEach((restaurans) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurans);
    });
  },
};

export default Home;
