const menuBtn = document.querySelector(".navbar__menu-icon");
const navList = document.querySelector(".nav-container__list");

function menuToggle() {
  navList.classList.toggle("opened");
}

menuBtn.addEventListener("click", menuToggle);
