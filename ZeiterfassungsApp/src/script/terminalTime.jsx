import axios from "axios";

function theTime() {
  let date = new Date();
  let stunden = date.getHours().toString().padStart(2, "0");
  let minuten = date.getMinutes().toString().padStart(2, "0");
  let time = stunden + ":" + minuten;
  if (document.querySelector(".js-time") !== null) {
  document.querySelector(".js-time").innerHTML = time;
  }
}

async function berechneMonatlicheArbeitszeit() {
  const heute = new Date();  
  const jahr = heute.getFullYear();  
  const aktuellerMonat = heute.getMonth(); 
  const heutigerTag = heute.getDate(); 

  const monate = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];
  const feiertage = await getFeiertage(jahr);  

  const arbeitszeitProTag = 7; 
  let monatlicheArbeitszeiten = {};

  for (let i = 0; i <= aktuellerMonat; i++) { 
    let letzterTag = (i === aktuellerMonat) ? heutigerTag : new Date(jahr, i + 1, 0).getDate();  
    let werktage = 0;

    for (let tag = 1; tag <= letzterTag; tag++) {
      let wochentag = new Date(jahr, i, tag).getDay();
      let datumString = `${jahr}-${(i + 1).toString().padStart(2, "0")}-${tag.toString().padStart(2, "0")}`;
      
      if (wochentag >= 1 && wochentag <= 5 && !feiertage.includes(datumString)) { // Nur Montag bis Freitag zählen        
        werktage++;
      }}

    monatlicheArbeitszeiten[monate[i]] = werktage * arbeitszeitProTag;
  }
  return monatlicheArbeitszeiten;
}

async function getFeiertage(jahr){
  
  let feiertage = [];
  try {
    const response = await axios.get(`https://get.api-feiertage.de?years=${jahr}&states=ni`);
    response.data.feiertage.forEach(feiertag => {
      feiertage.push(feiertag.date);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  } 
  return feiertage;
}

async function timeStart() {
  console.log("Time started");
}
export { theTime, berechneMonatlicheArbeitszeit, getFeiertage, timeStart };

export async function getTimeStamp(selectedItemId){
  try {
    const response = await axios.get('http://localhost:5000/api/v1/zeiterfassungsDB/zeitkonto/' + selectedItemId);
    if(response.data.length > 0){
      return true;
    }else return false;
  } 
  catch (error) {
    console.error('Error fetching data:', error);
  }
}

export async function createTagesZeitKonto(nutzer_id, minuten){
  try {
    const response = await axios.post('http://localhost:5000/api/v1/zeiterfassungsDB/zeitkonto/create', {nutzer_id, minuten});
    console.log(response.data);
  } 
  catch (error) {
    console.error('Error fetching data:', error);
  }
}

export async function updateTagesZeitKonto(minuten, id){
  try {
    const response = await axios.put('http://localhost:5000/api/v1/zeiterfassungsDB/zeitkonto/update/' + id, {minuten});
    console.log(response.data);
  } 
  catch (error) {
    console.error('Error fetching data:', error);
  }
}