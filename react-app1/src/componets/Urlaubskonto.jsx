import { useEffect, useState } from 'react';
import '../assets/MeinUrlaubskonto.css';
import 'js-circle-progress';
import UrlaubsDaten from '../modules/Urlaubsdaten';
import { Link } from'react-router-dom';

function Urlaubskonto(id)
{ 
  let urlaubsDaten = new UrlaubsDaten();
  let [urlaubsinfo, setUrlaubsinfo] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_Api_Server}/api/v1/zeiterfassungsDB/urlaub/${id.selectedItemId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json()
    })
      .then(data => {
        setUrlaubsinfo(data);        
    })
    .catch(error => console.log(error));
  }, [id.selectedItemId]);
    
  if (urlaubsinfo && urlaubsinfo.urlaub && urlaubsinfo.urlaub.length > 0) {
    urlaubsDaten = new UrlaubsDaten();    
    urlaubsDaten.update(urlaubsinfo.urlaub[0]);
  }
  return(
    <div className="info-item">
      <div className="urlaubskonto-card">
    <h3 className='js-sprache'>Mein Urlaubskonto</h3>
    <div className="urlaubs-tage">
    <div className="urlaubskonto-details">
        <p className='js-sprache'>Urlaubsanspruch: 
          <strong>{urlaubsDaten.Urlaubsanspruch}</strong></p>
        <p className='js-sprache'>Urlaub genommen: 
          <strong>{urlaubsDaten.Urlaubgenommen}</strong></p>
        <p className='js-sprache'>Urlaub geplant: 
          <strong>{urlaubsDaten.Urlaubgeplant}</strong></p>
        <p className='js-sprache'>Resturlaub (inkl. Planung): 
          <strong>{urlaubsDaten.resturlaubBerechnen()}</strong></p>
    </div>

    <div className="urlaubskonto-circle">
        
        <circle-progress text-format='value' value={urlaubsDaten.resturlaubBerechnen()} max={urlaubsDaten.Urlaubsanspruch}></circle-progress>
            
    </div>
  </div>
    <div className="urlaubskonto-footer">
        <Link className='js-sprache' to="./meinurlaub" state={{urlaubsDaten}}>Urlaubsübersicht öffnen</Link>
    </div>
</div>
    </div>
  );
}

export default Urlaubskonto