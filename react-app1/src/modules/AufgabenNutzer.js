class AufgabenNutzer {
  constructor() {
    this.speicher = [];
    this.Aufgaben = [];
    this.id = [];
  }

  update(data) {
    data.forEach(element => {
      if (element.aufgabe === undefined) {
        this.Aufgaben.push(element);           
      }else {
        this.id.push(element.id);
        this.Aufgaben.push(element.aufgabe);
      }
      
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
  
  async deleteAufgabe(index){        
    
    index = this.id[index];    
    try {
      const response = await fetch(`http://localhost:5000/api/v1/zeiterfassungsDB/delete/${index}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Delete successful:', data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
}

  
 


export default AufgabenNutzer;