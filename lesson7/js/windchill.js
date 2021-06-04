let tempF = parseFloat(document.querySelector("#temp").textContent);
let wind = parseFloat(document.querySelector("#wind").textContent);

if (tempF <= 50 && ((wind) => 3)) {
    let wc = windChill(tempF, wind);
    document.querySelector("#windchill").textContent = wc.toFixed(0);
} else {
    document.querySelector("#windchill").textContent = "N/A";
}

function windChill(tempF, wind) {
    let wc =
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(wind, 0.16) +
        0.4275 * tempF * Math.pow(wind, 0.16);
    return wc;
}