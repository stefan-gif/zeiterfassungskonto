import axios from 'axios';

class MitarbeiterDaten {
  constructor() {
    this.bild = "bild";
    this.vorname = "vorname";
    this.nachname = "nachname";
    this.email = "email";
    this.abteilung = "abteilung";
    this.telefon = "telefon";
    this.alledaten = [];  
  }

  update(data) {
    this.vorname = data.vorname;
    this.nachname = data.nachname;
    this.email = data.email;
    this.abteilung = data.abteilung;
    this.telefon = data.telefon;
  }

  update2(data) {
    this.email = data.email;
    this.abteilung = data.abteilung;
    this.vorname = data.vorname;
    this.nachname = data.nachname;
    this.id = data.id;
    this.alledaten.push(data);
  }
  updatePut(selectedItemId,data) {
    axios.put(`${import.meta.env.VITE_Api_Server}/api/v1/zeiterfassungsDB/update/${selectedItemId}`, data)
    .then(response => console.log(response.data));
  }
}

export default MitarbeiterDaten;