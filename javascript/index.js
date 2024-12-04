let newYorkElement = document.querySelector("#new-york");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkDateElement = newYorkElement.querySelector(".date");

let stockholmElement = document.querySelector("#stockholm");
let stockholmTimeElement = stockholmElement.querySelector(".time");
let stockholmDateElement = stockholmElement.querySelector(".date");

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
}

updateTime();

setInterval(updateTime, 1000);
