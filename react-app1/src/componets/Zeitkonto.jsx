import '../assets/Zeitkonto.css';
import React, { useState,useEffect } from 'react';
 

function Zeitkonto()
{
  const zeitkonto = {
    Saldo: "00:01"
  };  

  return(
      <div className="info-item">
        <div className='Ueberschrift'>
          <p className='js-sprache'>Zeitkonten</p>
        </div>
        <div className="zeitkonto">
          <p className='js-sprache'>Saldo</p><p>{zeitkonto.Saldo} h</p>
        </div>
      </div>
  );
}

export default Zeitkonto