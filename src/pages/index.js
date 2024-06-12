import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import ContactoCollapse from "../components/contactocollapse";
import TandemModal from "../components/tandemmodal";
import TandemSlider from "../components/tandemslider";
import { Button } from 'primereact/button';
import Alumno from "../components/alumno";
import MiMapa from "../components/mimapa";

const IndexPage = () => {
  const [latLng, setLatLng] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  // https://stackoverflow.com/questions/51304195/react-leaflet-with-gatsby
  return (
    <Layout>
      {isClient && <div>

        <MiMapa setLatLng={setLatLng} />
        <div className="coordinates">
          {latLng ? (
            <p>
              Latitud: {latLng.lat}, Longitud: {latLng.lng}
            </p>
          ) : (
            <p>Haz clic en el mapa para obtener las coordenadas del punto seleccionado</p>
          )}
        </div>
      </div>}


    </Layout>
  );
}

export default IndexPage;

