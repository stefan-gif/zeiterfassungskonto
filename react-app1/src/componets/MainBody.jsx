import MitarbeiterInfo from "./MitarbeitInfo";
import MeineAufgaben from "./MeineAufgaben";
import Urlaubskonto from "./Urlaubskonto";
import Terminal from "./Terminal";
import Zeitkonto from "./Zeitkonto";
import Kalender from "./Kalender";

function MainBody() {
  return (
    <div className="info-container">
      <div className="info-row">
        <MitarbeiterInfo />
        <MeineAufgaben />
        <Urlaubskonto />
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