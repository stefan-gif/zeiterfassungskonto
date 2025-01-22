import React, { useState, useEffect } from 'react';
import '../assets/MeineAufgabe.css'
import AufgabenDaten from '../modules/AufgabenNutzer';

function AufgabenListe({selectedItemId})
{
  const aufgabenDaten = new AufgabenDaten();
  const [change,setChange] = useState(false);
  const [previousAufgaben, setPreviousAufgaben] = useState([]);
  const [showbutton, setShowbutton] = useState(false);
  const [aufgaben, setAufgaben] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/zeiterfassungsDB/aufgabendaten/${selectedItemId}`)
    .then(response => { 
      if (!response.ok) { 
        throw new Error("Network response was not ok"); 
      }
      return response.json()
    })
      .then(data => {
        setAufgaben(data);
    })
    .catch(error => console.log(error));
  }, [selectedItemId, change]);
  
  if (aufgaben && aufgaben.length > 0) {
    
    if(typeof aufgaben[0] === "string")
      {                
        aufgabenDaten.update(aufgaben);        
      }else aufgabenDaten.update(aufgaben[0]); 

  }
  
  async function deleteAufgabe(e) {
    const index = e.target.dataset.index;
    setPreviousAufgaben([...aufgabenDaten.Aufgaben]);    
    const aufgabeNeu = [...aufgabenDaten.Aufgaben];    
    aufgabeNeu.splice(index, 1);
    setAufgaben([...aufgabeNeu]);
    setShowbutton(true);
    try {
      await aufgabenDaten.deleteAufgabe(index);
      setChange(!change);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }

  function setback() {
    console.log(previousAufgaben[previousAufgaben.length-1]);
    const body = {
      nutzer_id: selectedItemId,
      aufgabe: previousAufgaben[previousAufgaben.length-1]
    };
    aufgabenDaten.createAufgabe(body);
    setAufgaben(previousAufgaben);
    setShowbutton(false);
  }

  return(

    <div className="aufgabenliste" >
          <ul>
            {aufgabenDaten.Aufgaben.map((todo, index) => (               
              <li  className='Aufgabenlist'
              key={index} onClick={deleteAufgabe} data-index={index} >{index+1}. {todo}</li>              
            ))}
            <li>
              <input 
                type="text" 
                placeholder="Neue Aufgabe hinzufügen" 
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim() !== '') {
                   const body = {
                    nutzer_id : selectedItemId,
                    aufgabe: e.target.value.trim()
                   };
                   aufgabenDaten.createAufgabe(body);
                   aufgabenDaten.Aufgaben.push(e.target.value.trim());
                   setAufgaben([aufgabenDaten.Aufgaben]);
                   e.target.value = '';
                   }
                 }} 
              />
            </li>
          </ul>
          {showbutton && <button onClick={setback} className="removeButton">Rückgängig</button>}
        </div>
  )  
}

export default AufgabenListe