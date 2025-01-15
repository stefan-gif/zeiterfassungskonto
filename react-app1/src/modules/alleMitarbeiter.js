class alleMitarbeiter {
  constructor() {
    this.id = "id";
    this.Vorname = "vorname";
    this.Nachname = "nachname";    
  }

  update(data) {
    this.Vorname = data.vorname;
    this.Nachname = data.nachname;
    this.id = data.id;
  }
}

export default alleMitarbeiter;