import { useLocation,useParams } from "react-router-dom";
function MeinUrlaub(){
  const location = useLocation();
  const { id } = useParams();
  const { urlaubsDaten } = location.state || {}; 
  console.log(id);
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