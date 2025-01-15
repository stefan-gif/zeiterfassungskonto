import '../assets/header.css';
import React, { useState,useEffect } from 'react';
import alleMitarbeiter from '../modules/alleMitarbeiter.js';
import {spracheDeutsch , spracheEnglisch} from '../script/sprachen.js';

function Header ({ setSelectedItemId }){
  

  const [selectedItemIdHeader, setSelectedItemIdHeader] = useState(null);
  let handleMitarbeiterinfo = (event) => {
    const selectedId = parseInt(event.target.value, 10); 
    setSelectedItemIdHeader(selectedId);
    setSelectedItemId(selectedId);
  };
  
  let alledaten = [];
  const [user, setUser] = useState(null);
  const alleMitarbeit = new alleMitarbeiter();

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/zeiterfassungsDB')
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
  }, []);

  if (user && user.user && user.user.length > 0) {
    alledaten = [];
    let i = 0;
    user.user.forEach(element => {
      alleMitarbeit.update(element);
      alledaten = alleMitarbeit.alledaten;
      i++;
    });      
  }

  return(
    <header>
      <div className="headerone">
      <h1 className='ueberschrift js-sprache'>Zeiterfassungssoftware</h1>    
        <div className='header-buttons'>        
          <button onClick={spracheDeutsch}>DE</button>
          <button onClick={spracheEnglisch}>ENG</button>
          <button >???</button>
          <select value={selectedItemIdHeader || ""} onChange={handleMitarbeiterinfo} name="mitarbeiter" >
            {alledaten.map((element, index) => (
              <option  value={element.id} key={index}>{element.nachname}, {element.vorname}</option>
            ))}
          </select>
        </div>
      </div>
      
      <nav>
        <ul className="button-navi">
          <button className='navi-button js-sprache'>Startseite</button>
          <button className='navi-button js-sprache'>Mitarbeiter</button>
          <button className='navi-button js-sprache'>Zeit</button>
          <button className='navi-button js-sprache'>Anwesenheitsdisplay</button>
          <button className='navi-button js-sprache'>Kalender</button>
          <button className='navi-button js-sprache'>Ampelkonto</button>
          <button className='navi-button js-sprache'>Zeierfassung</button>
        </ul>
      </nav>
      <hr />
      
    </header>

  );
}

export default Header