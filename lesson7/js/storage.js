function getNumberOfDays(start, end) {
    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime = end - start;

    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

document.querySelector("span.visit").innerHTML = getNumberOfDays(
    new Date(localStorage.getItem("date1")),
    new Date()
);

localStorage.setItem("date1", new Date());