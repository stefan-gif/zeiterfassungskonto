import '../assets/Terminale.css';
import { atHome,atWork } from '../script/terminal';
import { theTime, getTimeStamp,createTagesZeitKonto,updateTagesZeitKonto } from '../script/terminalTime';
import { Link } from'react-router-dom';
import {  useEffect } from'react';
import { useStopwatch } from'react-timer-hook';

function Terminal({selectedItemId})
{  
  let date = new Date();
  let stunden = date.getHours().toString().padStart(2, "0");
  let minuten = date.getMinutes().toString().padStart(2, "0");
  let time = stunden + ":" + minuten;
  useEffect(() => {
    setInterval(theTime, 10000);
  }, []);

  const {    
    minutes,
    hours,    
    start,
    pause,
    reset,
  } = useStopwatch();

  let zeit = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;  

  const testfunktion = async() => {
    const timestamp = await getTimeStamp(selectedItemId);
    console.log(selectedItemId);
    if (!timestamp) {
      createTagesZeitKonto(selectedItemId,0);
    } 
  };

  const zeitSpeichern = async() => {
    let minutesPara = minutes+hours*60;
    console.log(minutesPara);
    await updateTagesZeitKonto(minutesPara,selectedItemId);
  };
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
        <button  className="extra-btn">🔔</button>
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
    <button className="control-btn start js-start"  onClick={()=>{
      start();
      testfunktion();
    }}
    >▶</button>
    <button className="control-btn pause" onClick={pause}>⏸️</button>
    <button className="control-btn stop" onClick={() => {
      reset(undefined,false);
      zeitSpeichern();            
    }}>⏹️</button>
  </div>
  <div className="footer">
      <Link className="footer-link js-sprache" to='./zeit'>Übersicht erfasste Zeiten</Link>
  </div>
</div>
      </div>
  );
}

export default Terminal