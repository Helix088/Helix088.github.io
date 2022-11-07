const cityID = "5604473";
const appid = "d6715228d1a8c1a7461d432f816f3451";
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
                `icon${day + 1}`
            ).src = `https://openweathermap.org/img/wn/${x.weather[0].icon}.png`;
            day++;
        });
    });