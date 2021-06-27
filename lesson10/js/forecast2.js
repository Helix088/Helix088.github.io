const cityID = "5604473";
const appid = "f294865734f176c7193b898d22cbb23d";
const apiURLL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${appid}&units=imperial`;

fetch(apiURLL)
  .then((response) => response.json())
  .then((jsObject) => {
    let day = 0;
    const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    //console.log(jsObject);
    const fiveDayForecast = jsObject.list.filter((forecast) =>
      forecast.dt_txt.includes("18:00:00")
    );
    //console.log(fiveDayForecast);

    fiveDayForecast.forEach((x) => {
      let d = new Date(x.dt_txt);
      document.getElementById(`dayofweek${day + 1}`).textContent =
        dayofWeek[d.getDay()];
      document.getElementById(`forecast${day + 1}`).textContent =
        x.main.temp.toFixed(0);
      document.getElementById(
        `imagesrc${day + 1}`
      ).textContent = `https://openweathermap.org/img/wn/${x.weather[0].icon}.png`;
      day++;
    });
  });
