import  React, {useState} from "react"
import MiMapa from "./mimapa";
const LectorMapa = ()=>{
    const [latLng, setLatLng] = useState(null);
    return(
        <div>

<MiMapa setLatLng={setLatLng} />
<div className="coordinates">
  {latLng ? (
    <p>
      Latitud: {latLng.lat}, Longitud: {latLng.lng}
    </p>
  ) : (
    <p>Haz clic en el mapa para obtener las coordenadas</p>
  )}
</div>
</div>
    )

}
export default LectorMapa


