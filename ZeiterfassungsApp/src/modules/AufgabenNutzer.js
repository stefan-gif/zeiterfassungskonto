import axios from 'axios';

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
      const response = await fetch(`${import.meta.env.VITE_Api_Server}/api/v1/zeiterfassungsDB/delete/${index}`, {
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

  async createAufgabe(body){

    try{
      axios.post(`${import.meta.env.VITE_Api_Server}/api/v1/zeiterfassungsDB/create`, body)
      .then(response => console.log(response));  
    } catch (error){
      console.error ('error with the post: ', error);
    }
       
  }
}

  
 


export default AufgabenNutzer;