import { useLocation } from "react-router-dom";
function MeinUrlaub(){
  const location = useLocation();
  const { urlaubsDaten } = location.state || {}; 
  return(
    <div>
        <h3>Urlaubsübersicht</h3>
        {
          Object.keys(urlaubsDaten).map((data,index) => (<li key={index}>{data}: {urlaubsDaten[data]}</li>))
        }
   </div>
  )
}

export default MeinUrlaub;