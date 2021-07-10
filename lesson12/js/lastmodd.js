const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navagation");
hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);
window.onresize = () => {
  if (window.innerWidth > 960) mainnav.classList.remove("responsive");
};

const datefield = document.querySelector("#lastmod");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

datefield.innerHTML = `<em>${fulldate}</em>`;
