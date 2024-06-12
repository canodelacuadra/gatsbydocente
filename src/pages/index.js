import React, { useState } from 'react'
import Layout from '../components/layout';
import MapaConMarcador from "../components/mapaconmarcador"

const IndexPage = () => {

  const [latLng, setLatLng] = useState(null);



  return (
    <>
      <Layout>

        {typeof window !== 'undefined' &&
          <div>
            <MapaConMarcador setLatLng={setLatLng} />
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
        }


      </Layout>
    </>
  )
}

export default IndexPage