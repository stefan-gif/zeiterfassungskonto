import { useParams, useLocation } from "react-router-dom";
import MitarbeiterDaten from "../modules/MitarbeiterDaten";
import React,{ useState } from "react";
import { handleBlur,handleChange,handleEdit } from "../script/handler";


function Mitarbeiter()
{
  const { id } = useParams();
  const location = useLocation();
  const  mitarbeiterDaten  = location.state || {}; 
  
  const [editMode, setEditMode] = useState({
    vorname: false,
    nachname: false,
    email: false,
    telefon: false,
  });
  const [userData, setUserData] = useState({
    vorname: mitarbeiterDaten?.vorname,
    nachname: mitarbeiterDaten?.nachname,
    email: mitarbeiterDaten?.email,
    telefon: mitarbeiterDaten?.telefon 
  });
  function speichern() {
    const mitarbeiter = new MitarbeiterDaten();
    mitarbeiter.updatePut(id, userData);
  }

  return(
    <div>
      <h1>Mitarbeiter Profil</h1>
      {
        Object.keys(userData).map((field,index) => (editMode[field] ?( 
          <div key={index}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}: </label>
            <input
              name={field}
              value={userData[field]}
              onChange={(e) => handleChange(e, setUserData)}
              onKeyDown={(e) => e.key === 'Enter' && speichern()}
              onBlur={()=> handleBlur(field,setEditMode)}
              autoFocus
            />
          </div>               
        ) : (
          <p style={ {width: '10%' }} key={index} onClick={() => handleEdit(field,setEditMode)}>
            {field.charAt(0).toUpperCase() + field.slice(1)}: {userData[field]}
          </p>  
        ))) 
      }    
      <button onClick={speichern}>Speichern</button>      
    </div>
  )
}

export default Mitarbeiter;

// {
//   Object.keys(mitarbeiterDaten).map((data,index) => (<li key={index}>{data}: {mitarbeiterDaten[data]}</li>))
// }