const startNumber = 9;
let counter = startNumber;
const flipCard = document.querySelector(".flip-card");
const topChild = document.querySelector(".top");
const bottomChild = document.querySelector(".bottom");

topChild.textContent = counter;
bottomChild.textContent = counter;
flipCard.dataset.topNumber = counter;
flipCard.dataset.bottomNumber = counter - 1;

setInterval(() => {
  flipCard.addEventListener("animationstart", (e) => {
    topChild.textContent = counter;
  });
  flipCard.addEventListener("animationend", (e) => {
    flipCard.dataset.topNumber = counter;
    bottomChild.textContent = counter;
    flipCard.classList.remove("flip");
  });
  flipCard.classList.add("flip");
  counter = counter > 0 ? counter - 1 : 9;
}, 1000);
