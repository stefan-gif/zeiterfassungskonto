import '../assets/MeinUrlaubskonto.css';
import urlaubsinfo from '../script/urlaubsinfo';
import 'js-circle-progress';

function Urlaubskonto()
{ 
  const restUrlaub = urlaubsinfo.Urlaubsanspruch-urlaubsinfo.UrlaubGenommen-urlaubsinfo.UrlaubGeplant;
  return(
    <div className="info-item">
      <div className="urlaubskonto-card">
    <h3 className='js-sprache'>Mein Urlaubskonto</h3>
    <div className="urlaubs-tage">
    <div className="urlaubskonto-details">
        <p className='js-sprache'>Urlaubsanspruch: <strong>{urlaubsinfo.Urlaubsanspruch}</strong></p>
        <p className='js-sprache'>Urlaub genommen: <strong>{urlaubsinfo.UrlaubGenommen}</strong></p>
        <p className='js-sprache'>Urlaub geplant: <strong>{urlaubsinfo.UrlaubGeplant}</strong></p>
        <p className='js-sprache'>Resturlaub (inkl. Planung): <strong>{restUrlaub}</strong></p>
    </div>

    <div className="urlaubskonto-circle">
        
        <circle-progress text-format='value' value={restUrlaub} max={urlaubsinfo.Urlaubsanspruch}></circle-progress>
            
    </div>
  </div>
    <div className="urlaubskonto-footer">
        <a className='js-sprache' href="#">Urlaubsübersicht öffnen</a>
    </div>
</div>
    </div>
  );
}

export default Urlaubskonto