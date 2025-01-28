import axios from 'axios';

class MitarbeiterDaten {
  constructor() {
    this.Bild = "bild";
    this.Vorname = "vorname";
    this.Nachname = "nachname";
    this.Email = "email";
    this.Abteilung = "abteilung";
    this.Telefon = "telefon";
  }

  update(data) {
    this.Vorname = data.vorname;
    this.Nachname = data.nachname;
    this.Email = data.email;
    this.Abteilung = data.abteilung;
    this.Telefon = data.telefon;
  }
  updatePut(selectedItemId,data) {
    axios.put(`${import.meta.env.VITE_Api_Server}/api/v1/zeiterfassungsDB/update/${selectedItemId}`, data)
    .then(response => console.log(response.data));
  }
}

export default MitarbeiterDaten;