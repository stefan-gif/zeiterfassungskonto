import '../assets/header.css';
import React, { useState,useEffect } from 'react';
import {spracheDeutsch , spracheEnglisch} from '../script/sprachen.jsx';
import { Link } from 'react-router-dom';
import MitarbeiterDaten from '../modules/MitarbeiterDaten.js';

function Header ({ setSelectedItemId }){
  
  const [selectedItemIdHeader, setSelectedItemIdHeader] = useState(null);
  const [index, setIndex] = useState(null);
  let handleMitarbeiterinfo = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedOption = event.target.selectedIndex;
    setSelectedItemIdHeader(selectedId);
    setSelectedItemId(selectedId);
    setIndex(selectedOption);
  };
  
  let alledaten = [];
  const [user, setUser] = useState(null);
  const alleMitarbeit = new MitarbeiterDaten();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_Api_Server}/api/v1/zeiterfassungsDB`)
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
      alleMitarbeit.update2(element);
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
              <option  
              value={element.id}
              key={index}
              data_index={index}
              >{element.nachname}, {element.vorname}</option>
            ))}
          </select>
        </div>
      </div>
      
      <nav>
        <ul className="button-navi">
          <Link to='/'>
            <button className='navi-button js-sprache'>Startseite</button>
          </Link>
          <Link to={`/mitarbeiter/${selectedItemIdHeader}`} state={alledaten[index]}>
            <button className='navi-button js-sprache'>Mitarbeiter</button>
          </Link>
          <Link to='/zeit'>
            <button className='navi-button js-sprache'>Zeit</button>
          </Link>
          <Link to='/anwesenheit'>
            <button className='navi-button js-sprache'>Anwesenheit</button>
          </Link>
          <Link to='/kalender'>
            <button className='navi-button js-sprache'>Kalender</button>
          </Link>
          <Link to='/ampelkonto'>
            <button className='navi-button js-sprache'>Ampelkonto</button>
          </Link>
          <Link to='/terminal'>
            <button className='navi-button js-sprache'>Terminal</button>
          </Link>
        </ul>
      </nav>
      <hr />
      
    </header>

  );
}

export default Header