const bg1 = document.querySelector(".container-bg");
const col_box = document.querySelector(".skills-bg");

const windowWidth = bg1.style.width;
window.addEventListener("scroll", (event) => {
  const scrollY = window.scrollY;
  if (scrollY > 10 && scrollY < 450) {
    if (scrollY <= 440) {
      col_box.style.transform = `rotate(${20 - (scrollY / 100) * 4.6}deg)`;
    }

    col_box.style.top = `${35 - scrollY / 100}%`;
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
