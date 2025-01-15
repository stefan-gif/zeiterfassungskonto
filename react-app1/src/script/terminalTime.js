function theTime() {
  let date = new Date();
  let stunden = date.getHours().toString().padStart(2, "0");
  let minuten = date.getMinutes().toString().padStart(2, "0");
  let time = stunden + ":" + minuten;
  document.querySelector(".js-time").innerHTML = time;
}

export { theTime };