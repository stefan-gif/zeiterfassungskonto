import '../assets/Minfo.css';
import React, { useState, useEffect } from 'react';
import MitarbeiterDaten from '../modules/MitarbeiterDaten';
import { Link } from 'react-router-dom';

function MitarbeiterInfo({selectedItemId})
{ 
 
  const [mitarbeiterDaten, setMitarbeiterDaten] = useState(new MitarbeiterDaten());
   
  useEffect(() => {    
    fetch(`${import.meta.env.VITE_Api_Server}/api/v1/zeiterfassungsDB/${selectedItemId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        
        if(data && data.product && data.product.length > 0) {
          const updatedDaten = new MitarbeiterDaten();  
          updatedDaten.update(data.product[0]);
          setMitarbeiterDaten(updatedDaten);
      }})
      .catch(error => console.log(error));
  }, [selectedItemId]);
  return(
    <div className="info-item">
      <div className="profile-card">
        <div className="image">{mitarbeiterDaten?.bild}</div>
        <p className="name">{mitarbeiterDaten?.nachname}, {mitarbeiterDaten.vorname}</p>
        <p className="email">{mitarbeiterDaten?.email}</p>

        <div className="row">
            <div>
                <div className="label js-sprache">Fachbereich</div>
                <div className="value">{mitarbeiterDaten?.abteilung}</div>
            </div>
            <div>
                <div className="label js-sprache">Telefon</div>
                <div className="value">{mitarbeiterDaten?.telefon}</div>
            </div>
        </div>

        <div className="actions">
          <Link className='action' to='/#'>
            <div className="action js-sprache">Reiseantrag</div>
          </Link>
          <Link className='action' to='/#'>
            <div className="action js-sprache">Urlaubsantrag</div>
          </Link> 
          <Link className='action' to='/zeit'>
            <div className="action js-sprache">Meine Zeiten</div>
          </Link>   
          <Link className='action' to='/#'>
            <div className="action js-sprache">Meine Bewertungen</div>
          </Link>
        </div>

        <div className="edit-profile">
            <Link className="js-sprache" 
              to={`/mitarbeiter/${selectedItemId}`}
              state={mitarbeiterDaten}
            >
              Profil bearbeiten
            </Link>
        </div>
      </div>
    </div>
  );
}
export default MitarbeiterInfo