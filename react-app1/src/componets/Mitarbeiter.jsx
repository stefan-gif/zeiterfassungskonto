import { useParams, useLocation } from "react-router-dom";

function Mitarbeiter()
{
  const { id } = useParams();
  const location = useLocation();
  const { mitarbeiterDaten } = location.state || {}; 
  return(
    <div>
      <h1>Mitarbeiter Profil</h1>
      {
        Object.keys(mitarbeiterDaten).map((data,index) => (<li key={index}>{data}: {mitarbeiterDaten[data]}</li>))
      }
    </div>
    
  )
}

export default Mitarbeiter