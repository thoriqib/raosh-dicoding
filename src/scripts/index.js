import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import * as json from "../DATA.json";

const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const data = json.default.restaurants;
console.log(data);

const cardList = document.querySelector(".cards");
let cards = "";
data.forEach((el) => {
  let star = "";
  for (let i = 0; i < Math.floor(el.rating); i++) {
    star += `<i class="bi bi-star-fill"></i>`;
  }

  cards += `<li class="cards_item">
    <div class="card">
      <div class="card_image">
        <img src=${el.pictureId} alt=${el.name}/>
      </div>
      <div class="card_content">
        <div class="card_label">
          <div class="card_rating">${star}<span style="color: white;">${el.rating}</span></div>
          <div class="card_city">${el.city}</div>
        </div>
        <h2 class="card_title">${el.name}</h2>
        <p class="card_text">${el.description}</p>
        <button class="btn card_btn">Read More</button>
      </div>
    </div>
  </li>`;
});

cardList.innerHTML = cards;
