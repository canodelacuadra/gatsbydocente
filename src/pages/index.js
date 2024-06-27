import React, { useState } from 'react'
import Layout from '../components/layout';
import MapaConMarcador from "../components/mapaconmarcador"
import QRCodeGenerator from '../components/codeqrgenerator';
const IndexPage = () => {
  const data = "https://www.example.com";
  const [latLng, setLatLng] = useState(null);



  return (
    <>
      <Layout>
        <main>
          <h1>Generador de Código QR</h1>
          <QRCodeGenerator data={data} size={256} fgColor="#ff0000" />
        </main>

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