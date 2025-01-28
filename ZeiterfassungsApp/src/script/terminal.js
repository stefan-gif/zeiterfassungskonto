function atWork(){
  document.querySelector('.js-anwesend-balken').classList.remove('abwesendrot');
  let homeoffice =document.querySelector('.js-status-indicator');
  homeoffice.innerHTML = "Anwesend";
  homeoffice.style.color = "green";
}
function atHome(){
  document.querySelector('.js-anwesend-balken').classList.add('abwesendrot');
  let homeoffice =document.querySelector('.js-status-indicator');
  homeoffice.innerHTML = "Homeoffice";
  homeoffice.style.color = "red";
}

export {atWork, atHome}