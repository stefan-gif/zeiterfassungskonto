import urlaubsinfo  from './urlaubsinfo.js';

const deutsch = ["Zeiterfassungssoftware", "Startseite", "Mitarbeiter", "Zeit", "Anwesenheitsdisplay", "Kalender", "Ampelkonto", "Zeierfassung", "Fachbereich","Telefon","Reiseantrag","Urlaubsantrag","Meine Zeiten","Meine Bewertungen","Profil bearbeiten","Meine Aufgaben","Aufgaben Übersicht öffnen","Mein Urlaubskonto",`Urlaubsanspruch: <strong>${urlaubsinfo.Urlaubsanspruch}</strong>`,`Urlaub genommen: <strong>${urlaubsinfo.UrlaubGenommen}`,`Urlaub geplant: <strong>${urlaubsinfo.UrlaubGeplant}`,`Resturlaub (inkl. Planung): <strong>${urlaubsinfo.Resturlaub}</strong>`, "Urlaubsübersicht öffnen","Terminal","Zusatzeingabe auswählen","Planungsgruppe","Übersicht erfasste Zeiten","Zeitkonto","Saldo"];

const englisch = ["Time tracking software", "Home", "Employee", "Time", "Attendance display", "Calendar", "Traffic light account", "Time recording", "Department","Phone","Travel request","Vacation request","My times","My reviews","Edit profile","My tasks","Open task overview","My vacation account",`Vacation entitlement: <strong>${urlaubsinfo.Urlaubsanspruch}</strong>`,`Vacation taken: <strong>${urlaubsinfo.UrlaubGenommen}`,`Vacation planned: <strong>${urlaubsinfo.UrlaubGeplant}`,`Remaining vacation (including planning): <strong>${urlaubsinfo.Resturlaub}</strong>`, "Open vacation overview","Terminal","Select additional input","Planning group","Overview of recorded times","Time account","Balance"];

function spracheDeutsch(){
  let elemente = document.querySelectorAll('.js-sprache');
  let i = 0;
  elemente.forEach(element => {
    element.innerHTML = deutsch[i];
    i++;
  });
}
function spracheEnglisch(){
  let elemente = document.querySelectorAll('.js-sprache');
  let i = 0;
  elemente.forEach(element => {
    element.innerHTML = englisch[i];
    i++;
  });
}
export {deutsch, englisch, spracheDeutsch, spracheEnglisch};