import '../assets/MeineAufgabe.css'

function MeineAufgaben(){

  return(
    <div className="info-item-meine-aufgaben">
      <div className="profile-card-meine-aufgaben">
      <div className="Name js-sprache"><p>Meine Aufgaben</p></div>  
      <div className="aufgabenliste">Liste</div>
      <div className="actions-meine-aufgaben">
        <a className='js-sprache' href="#">Aufgaben Übersicht öffnen</a>
      </div>    
      </div>
    </div>
  );
}

export default MeineAufgaben