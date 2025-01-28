import MitarbeiterInfo from "./MitarbeitInfo";
import MeineAufgaben from "./MeineAufgaben";
import Urlaubskonto from "./Urlaubskonto";
import Terminal from "./Terminal";
import Zeitkonto from "./Zeitkonto";
import Kalender from "./Kalender";

function MainBody({selectedItemId}) {
  return (
    <div className="info-container">
      <div className="info-row">
        <MitarbeiterInfo selectedItemId={selectedItemId}/>
        <MeineAufgaben selectedItemId={selectedItemId}/>
        <Urlaubskonto selectedItemId={selectedItemId} />
      </div>

      <div className="info-row">
        <Terminal />
        <Zeitkonto />
        <Kalender />
      </div>
    </div>
  );
}


export default MainBody