let newYorkElement = document.querySelector("#new-york");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkDateElement = newYorkElement.querySelector(".date");

let stockholmElement = document.querySelector("#stockholm");
let stockholmTimeElement = stockholmElement.querySelector(".time");
let stockholmDateElement = stockholmElement.querySelector(".date");

let singaporeElement = document.querySelector("#singapore");
let singaporeTimeElement = singaporeElement.querySelector(".time");
let singaporeDateElement = singaporeElement.querySelector(".date");

function updateTime() {
  let newYorkTime = moment().tz("America/New_York");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");

  let stockholmTime = moment().tz("Europe/Stockholm");
  stockholmTimeElement.innerHTML = stockholmTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  stockholmDateElement.innerHTML = stockholmTime.format("MMMM Do YYYY");

  let singaporeTime = moment().tz("Asia/Singapore");
  singaporeTimeElement.innerHTML = singaporeTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
}

updateTime();

setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "location") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("hh:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">Back to cities</a>`;
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
