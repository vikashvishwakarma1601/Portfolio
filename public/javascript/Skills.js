let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", flip,{once:true});
});

let isFlipped = false;
let firstCard, secondCard;

function flip() {
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
  }
}
