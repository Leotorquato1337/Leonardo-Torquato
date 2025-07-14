const prevButton = document.getElementById("prev"); //pegar o elemento através do ID
const nextButton = document.getElementById("next"); //pegar o elemento através do ID
const itens = document.querySelectorAll(".item"); //pegar o elemento através da classe
const dots = document.querySelectorAll(".dot"); //pegar o elemento através da classe
const numberIndicator = document.querySelector(".numbers"); //pegar o elemento através da classe
const list = document.querySelector(".list");
const total = itens.length;

let active = 0;
let timer;

function update(direction) {
  document.querySelector(".item.active").classList.remove("active");
  document.querySelector(".dot.active").classList.remove("active");

  if (direction > 0) {
    active = active + 1;
    if (active === total) {
      active = 0;
    }
  } else if (direction < 0) {
    active = active - 1;
    if (active < 0) {
      active = 2;
    }
  }
  itens[active].classList.add("active");
  dots[active].classList.add("active");
  numberIndicator.textContent = String(active + 1).padStart(2, "0");
}

setInterval(() => {
  update(1);
}, 5000);

prevButton.addEventListener("click", () => {
  update(-1);
});

nextButton.addEventListener("click", () => {
  update(+1);
});
