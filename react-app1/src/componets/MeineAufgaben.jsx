import React, { useState, useEffect } from 'react';
import '../assets/MeineAufgabe.css'
import AufgabenDaten from '../modules/AufgabenNutzer';

function MeineAufgaben(id){

  const aufgabenDaten = new AufgabenDaten();
  const [aufgaben, setAufgaben] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/zeiterfassungsDB/aufgaben/${id.selectedItemId}`)
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
  }, [id.selectedItemId]);
  
  if (aufgaben && aufgaben.length > 0) {
    aufgabenDaten.update(aufgaben[0]);
  }
  
  function deleteAufgabe(e) {
    const index = e.target.getAttribute('value');
    aufgabenDaten.Aufgaben.splice(index, 1);
    console.log(e.target);
    e.target.remove();  
  }

  return(
    <div className="info-item-meine-aufgaben">
      <div className="profile-card-meine-aufgaben">
        <div className="Name js-sprache"><p>Meine Aufgaben</p></div>  
        <div className="aufgabenliste" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <ul>
            {aufgabenDaten.Aufgaben.map((todo, index) => (               
              <li  className='Aufgabenlist'
              key={index} onClick={deleteAufgabe} value={index} >{index+1}. {todo}</li>              
            ))}
            <li>
              <input 
                type="text" 
                placeholder="Neue Aufgabe hinzufügen" 
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim() !== '') {
                   aufgabenDaten.Aufgaben.push(e.target.value.trim());
                   setAufgaben([aufgabenDaten.Aufgaben]);
                   e.target.value = '';
                   }
                 }} 
              />
            </li>
          </ul>
        </div>
        <div className="actions-meine-aufgaben">
          <a className='js-sprache' href="#">Aufgaben Übersicht öffnen</a>
        </div>    
      </div>
    </div>
  );
}

export default MeineAufgaben