import React, { useState } from 'react';

function ContadorClicks() {
  const [contador, setContador] = useState(0); // Estado inicial: 0

  const manejarClic = () => {
    setContador(contador + 1); // Actualizar el estado
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={manejarClic}>Hacer clic</button>
    </div>
  );
}

export default ContadorClicks;