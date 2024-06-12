import React, { useState } from 'react';

function FormularioNombre() {
  const [nombre, setNombre] = useState('');

  const manejarCambioNombre = (evento) => {
    setNombre(evento.target.value);
  };

  return (
    <div>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={manejarCambioNombre} />
      </label>
      <p>Nombre ingresado: {nombre}</p>
    </div>
  );
}

export default FormularioNombre;