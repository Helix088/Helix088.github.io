let list = document.querySelector(".list");
let grid = document.querySelector(".grid");
let cards = document.querySelector(".cards");

list.addEventListener("click", () => {
    cards.classList.add("list");
});

grid.addEventListener("click", () => {
    cards.classList.remove("list");
});