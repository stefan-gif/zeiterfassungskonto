import React from 'react';
import '../assets/MeineAufgabe.css'
import AufgabenListe from './AufgabenListe';

function MeineAufgaben({selectedItemId}){

  return(
    <div className="info-item-meine-aufgaben">
      <div className="profile-card-meine-aufgaben">
        <div className="Name js-sprache"><p>Meine Aufgaben</p></div>  
        <AufgabenListe selectedItemId={selectedItemId}/>
        <div className="actions-meine-aufgaben">
          <a className='js-sprache' href="#">Aufgaben Übersicht öffnen</a>
        </div>    
      </div>
    </div>
  );
}

export default MeineAufgaben