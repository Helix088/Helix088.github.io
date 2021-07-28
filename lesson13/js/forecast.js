const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=30.694&lon=-90.978&appid=707cee61e7b63162eb0b782dcdb4101e&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector("#temperature");
    temperature.textContent = jsObject.current.temp.toFixed(0);
    const currently = document.querySelector("#currently");
    const desc = jsObject.current.weather[0].description;
    currently.innerHTML = `<strong>${desc.toUpperCase()}</strong>`;
    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.current.humidity.toFixed(0);

    let day = 0;
    const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const threeDayForecast = jsObject;
    threeDayForecast.forEach((x) => {
      let d = new Date(x.dt_txt);
      document.getElementById(`dayofweek${day + 1}`).textContent =
        dayofWeek[d.getDay()];
      document.getElementById(`forecast${day + 1}`).textContent =
        x.current.temp.toFixed(0);
      document.getElementById(
        `icon${day + 1}`
      ).src = `https://openweathermap.org/img/wn/${x.daily.weather[0].icon}.png`;
      day++;
    });
  });
