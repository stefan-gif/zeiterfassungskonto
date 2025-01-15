class alleMitarbeiter {
  constructor() {
    this.id = "id";
    this.Vorname = "vorname";
    this.Nachname = "nachname";
    this.alledaten = [];    
  }

  update(data) {
    this.Vorname = data.vorname;
    this.Nachname = data.nachname;
    this.id = data.id;
    this.alledaten.push(data);
  }
 
}

export default alleMitarbeiter;