import '../assets/Terminale.css';
import { atHome,atWork } from '../script/terminal';
import { theTime } from '../script/terminalTime';
import { Link } from'react-router-dom';
import {  useEffect } from'react';

function Terminal()
{
  let date = new Date();
  let stunden = date.getHours().toString().padStart(2, "0");
  let minuten = date.getMinutes().toString().padStart(2, "0");
  let time = stunden + ":" + minuten;
  useEffect(() => {
    console.log("Hallo!");
    setInterval(theTime, 10000);
  }, []);
  

  return(
      
      <div className="info-item">
        <div className='Ueberschrift js-sprache'><p>Terminal</p></div>
        <div className="terminal">
  <div className="header">
    <div className="anwesend-balken js-anwesend-balken"></div>
    <div className="date-status">
      <span className="time js-time">{time}</span>
      <div className="date">{date.toLocaleDateString()}</div>
      <div className="status-indicator js-status-indicator">Anwesend</div>
    </div>
    <div className="icons">
      
    <div className="icon-btn-container">
          <button onClick={atWork} className="icon-btn building ">🏢</button>
          <button onClick={atHome} className="icon-btn home ">🏠</button>
    </div>
    <div className="additional-buttons">
        <button className="extra-btn">🔔</button>
        <button className="extra-btn">⚙️</button>
    </div>
    </div>
  </div>
  <div className="additional-options">
    <select>
      <option className='js-sprache'>Zusatzeingabe auswählen</option>
    </select>
    <select>
      <option className='js-sprache'>Planungsgruppe</option>
    </select>
  </div>
  <div className="controls">
    <button className="control-btn start js-start">⏺️</button>
    <button className="control-btn pause">⏸️</button>
    <button className="control-btn stop">⏹️</button>
  </div>
  <div className="footer">
      <Link className="footer-link js-sprache" to='./zeit'>Übersicht erfasste Zeiten</Link>
  </div>
</div>
      </div>
  );
}

export default Terminal