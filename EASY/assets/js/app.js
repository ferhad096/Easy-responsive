const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

/// Click otuside close menu /////
// document.onclick = function(e){
//   if(e.target.classList !== 'mobileNav'){
//     mobileNav.classList.remove("active");
//     hamburger.classList.remove("active");
//   }
//   if(e.target == hamburger) {
//     mobileNav.classList.add("active");
//     hamburger.classList.add("active");
//   }
// };

const arrow = document.querySelector(".arrow");
const arrow2 = document.querySelector(".drop-2 .arrow");
const dropDown = document.querySelector(".dropdown");
const dropDown2 = document.querySelector(".dropdown-2");

arrow.addEventListener("click", () => {
  arrow.classList.toggle("active");
  dropDown.classList.toggle("show");
});

arrow2.addEventListener("click", () => {
  arrow2.classList.toggle("active");
  dropDown2.classList.toggle("show");
});

// Swiper //

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const period = document.querySelector(".period");
const price = document.querySelectorAll(".per");

period.addEventListener("click", () => {
  period.classList.toggle("active");
  for (let i = 0; i < price.length; i++) {
    price[i].classList.toggle("yearly");
  }
});

function onReady(callback) {
  var intervalId = window.setInterval(function () {
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.opacity = visible ? "1" : "0";
  document.querySelector(selector).style.visibility = visible
    ? "visible"
    : "hidden";
  document.querySelector(selector).style.height = visible ? "100%" : "0";
  document.querySelector(selector).style.width = visible ? "100%" : "0";
}

onReady(function () {
  setVisible("#loading", false);
  setVisible(".overlay", false);
});
