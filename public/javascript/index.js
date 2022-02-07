const bg1 = document.querySelector(".container-bg");
const col_box = document.querySelector(".skills-bg");

const windowWidth = bg1.style.width;
const windowDimension = window.innerWidth;
window.addEventListener("scroll", (event) => {
  const scrollY = window.scrollY;
  if (scrollY > 10 && scrollY < 450) {
    if (scrollY <= 440) {
      col_box.style.transform = `rotate(${20 - (scrollY / 100) * 4.6}deg)`;
    }
    if (windowDimension < 600) {
      col_box.style.top = `${5 - scrollY / 100}%`;
    } else {
      col_box.style.top = `${35 - scrollY / 100}%`;
    }

    bg1.style.width = `${50 + (scrollY / 8) * 0.9}%`;
  }
  if (scrollY > 440) {
    col_box.style.transform = `rotate(0deg)`;
  }
});

const profession = document.querySelector("#profession");
let index = 0;
let text = "DEVELOPER";
let newText = "";
let id;
setInterval(() => {
  newText =
    index < text.length ? text.slice(0, index) + "_" : text.slice(0, index);

  profession.innerText = newText;

  if (index < text.length) {
    let count = 0;
    id = setInterval(() => {
      newText = count & 1 ? text.slice(0, index) + "_" : text.slice(0, index);
      profession.innerText = newText;
      count++;
    }, 250);
    if (count == 2) {
      clearInterval(id);
    }
  }
  index = index < text.length ? index + 1 : 0;
}, 500);

const burgerMenu = document.querySelector(".hamburger_menu");
const menu = document.querySelector(".menu");
let isActive = false;
burgerMenu.addEventListener("click", (event) => {
  if (isActive) {
    burgerMenu.classList.remove("active");
    menu.style.transform = 'translateY(-500px)';
    isActive = false;
  } else {
    burgerMenu.classList.add("active");
    menu.style.transform = 'translateY(0px)';
    isActive = true;
  }
});
