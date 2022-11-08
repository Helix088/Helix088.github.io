const list = document.querySelector(".list");
const grid = document.querySelector(".grid");
const cards = document.querySelector(".cards");

list.addEventListener("click", () => {
    cards.classList.add("list");
});

grid.addEventListener("click", () => {
    cards.classList.remove("list");
});