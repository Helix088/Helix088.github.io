localStorage.setItem("date1", new Date());
localStorage.setItem("date2", new Date());

function getNumberOfDays(start, end) {
    let date1 = start;
    let date2 = end;

    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime =
        localStorage.getItem("date2") - localStorage.getItem("date1");

    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

console.log(getNumberOfDays("date1", "date2"));