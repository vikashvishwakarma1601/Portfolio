const bg1 = document.querySelector(".container-bg");
const col_box = document.querySelector(".skills-bg");
const certification = document.querySelector("#certification");
const about = document.querySelector(".about_bg");
const windowWidth = window.innerWidth;


window.addEventListener("scroll", (event) => {
  const scrollY = window.scrollY;
  if (scrollY > 10 && scrollY < 450) {
    if (scrollY <= 440) {
      col_box.style.transform = `rotate(${20 - (scrollY / 100) * 4.6}deg)`;
    }
    if (windowWidth < 600) {
      col_box.style.top = `${5 - scrollY / 100}%`;
      if (scrollY > 900 && scrollY <= 1150) {
        col_box.style.transform = `rotate(0deg)`;
        certification.style.transform = `translateX(${100 - scrollY / 8}%)`;
      }
    } else {
      col_box.style.top = `${(scrollY / 100) * 5}%`;
    }
    bg1.style.width = `${50 + (scrollY / 8) * 0.9}%`;
  }
  if (scrollY > 440 && scrollY <= 900) {
    col_box.style.transform = `rotate(0deg)`;
  }
  if (scrollY > 600 && scrollY <= 850) {
    certification.style.transform = `translateX(${100 - scrollY / 8.5}%)`;
  }
  if (windowWidth < 600 && scrollY > 1400 && scrollY <= 2450) {
    about.style.left = `${100 - scrollY / 50}%`;
  } else if (scrollY > 1400 && scrollY <= 2000) {
    about.style.left = `${100 - scrollY / 40}%`;
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
    menu.style.transform = "translateY(-150%)";
    isActive = false;
  } else {
    burgerMenu.classList.add("active");
    menu.style.transform = "translateY(0%)";
    isActive = true;
  }
});

menu.addEventListener('click',()=>{
  if(isActive){
    menu.style.transform = "translateY(-150%)";
    burgerMenu.classList.remove("active");
  }
})

const hyperLink = Array.from(document.getElementsByTagName("a"));
const audio = document.querySelector("#audio");
hyperLink.forEach((link) => {
  link.addEventListener("click", () => {
    audio.play();
  });
});
