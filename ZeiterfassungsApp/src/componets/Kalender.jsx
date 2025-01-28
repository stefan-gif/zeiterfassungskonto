import React, { useState }  from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Kalender()
{
  const feiertage = {
    silvester : "2025-1-1",
    wasauchimmertag : "2025-1-5"
  }
  const [date, setDate] = useState(new Date());
  const onChange = (selectedDate) => {
    setDate(selectedDate); 
  };
  
  return(
      <div className="info-item">
        <div className="calendar-container">
      <div className="ueberschrift">
        <h6>Heute ist der {date.toLocaleDateString()}</h6>
      </div>
      <Calendar onChange={onChange} value={date} />
      <p>
        <a href="#">Mein Kalender öffnen</a>
      </p>
    </div>
      </div>
  );
}

export default Kalender