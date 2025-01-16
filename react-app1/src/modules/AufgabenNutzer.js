class AufgabenNutzer {
  constructor() {
    this.speicher = [];
    this.Aufgaben = [];    
  }

  update(data) {
    data.forEach(element => {
      if (element.aufgabe === undefined) {
        this.Aufgaben.push(element);        
      }else this.Aufgaben.push(element.aufgabe);
      
    });
  }
  setspeicher(data) {
    data.forEach(element => {
      this.speicher.push(element);
    });
  }

  getspeicher() {
    return this.speicher;
  }
 
}

export default AufgabenNutzer;