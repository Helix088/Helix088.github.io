const options = {
    year: "numeric",
};
document.getElementById("theyear").textContent = new Date().toLocaleDateString(
    "en-US",
    options
);

document.querySelector("#lastmod").textContent = document.lastModified;