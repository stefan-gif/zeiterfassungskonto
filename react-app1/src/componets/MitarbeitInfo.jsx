import '../assets/Minfo.css';
import React, { useState,useEffect } from 'react';
import MitarbeiterDaten from '../modules/MitarbeiterDaten';

function MitarbeiterInfo(id)
{
  const [user, setUser] = useState(null);
  const mitarbeiterDaten = new MitarbeiterDaten();
  
  
  
  useEffect(() => {    
    fetch(`http://localhost:5000/api/v1/zeiterfassungsDB/${id.selectedItemId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
      })
      .catch(error => console.log(error));
  }, [id.selectedItemId]);

  if (user && user.product && user.product.length > 0) {
    mitarbeiterDaten.update(user.product[0]);
  }
  
  return(
    <div className="info-item">
      <div className="profile-card">
        <div className="image">{mitarbeiterDaten.Bild}</div>
        <p className="name">{mitarbeiterDaten.Nachname}, {mitarbeiterDaten.Vorname}</p>
        <p className="email">{mitarbeiterDaten.Email}</p>

        <div className="row">
            <div>
                <div className="label js-sprache">Fachbereich</div>
                <div className="value">{mitarbeiterDaten.Abteilung}</div>
            </div>
            <div>
                <div className="label js-sprache">Telefon</div>
                <div className="value">{mitarbeiterDaten.Telefon}</div>
            </div>
        </div>

        <div className="actions">
            <div className="action js-sprache">Reiseantrag</div>
            <div className="action js-sprache">Urlaubsantrag</div>
            <div className="action js-sprache">Meine Zeiten</div>
            <div className="action js-sprache">Meine Bewertungen</div>
        </div>

        <div className="edit-profile">
            <a href="#" className='js-sprache'>Profil bearbeiten</a>
        </div>
      </div>
    </div>
  );
}

export default MitarbeiterInfo