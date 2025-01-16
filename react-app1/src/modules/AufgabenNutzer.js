class AufgabenNutzer {
  constructor() {
    
    this.Aufgaben = [];    
  }

  update(data) {
    data.forEach(element => {
      if (element.aufgabe === undefined) {
        this.Aufgaben.push(element);
      }else this.Aufgaben.push(element.aufgabe);
      
    });
  }
 
}

export default AufgabenNutzer;