let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", flip);
});

let winCount = 0;
let isFlipped = false;
let firstCard, secondCard;

function flip() {
  this.classList.add("flip");
  console.log(this.classList);
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
  }
}
