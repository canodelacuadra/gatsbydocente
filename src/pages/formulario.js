import React, { useState } from 'react';

function Registro() {
    const [nombre, setNombre] = useState(''); // Estado inicial para el nombre del usuario
    const [email, setEmail] = useState(''); // Estado inicial para el correo electrónico
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [enviado, setEnviado] = useState(false); // Estado inicial para indicar si el formulario se ha enviado

    const handleChangeName = (event) => {
        setNombre(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault(); // Evitar que se envíe el formulario para poder procesarlo desde js
        // Validamos los datos del formulario con mensajes de estado  y damos mensajes de error

        if (validateForm()) {
            submitDataServer()


            setEnviado(true); // Marcar formulario como enviado que aprovechamos para desactivar el button una vez clickeado

        }

    };
    // función de envio de datos al servidor
    const submitDataServer = () => {
        console.log('Nombre:', nombre);
        console.log('Correo electrónico:', email);


    }
    // función de validación de datos
    const validateForm = () => {
        if (nombre.trim().length === 0) {
            setError('El nombre es obligatorio');
            return false;
        }

        if (!/^[a-zA-Z]+[\s]*[a-zA-Z]+$/.test(nombre)) {
            setError('El nombre solo puede contener letras');
            return false;
        }

        if (email.trim().length === 0) {
            setError('El correo electrónico es obligatorio');
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('El correo electrónico no es válido');
            return false;
        }

        setError(''); // Limpiar el mensaje de error si los datos son válidos
        setSuccess('Datos válidos'); // Limpiar el mensaje de error si los datos son válidos

        return true;
    };

    return (
        <div>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:
                        <input type="text" value={nombre} onChange={handleChangeName} />
                    </label>
                </div>
                <div>
                    <label>Correo electrónico:
                        <input type="email" value={email} onChange={handleChangeEmail} />
                    </label>
                </div>
                <button type="submit" disabled={enviado} >Registrarse</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            {/* mostramos el mensaje una vez se ha enviado */}

            {enviado ? `Gracias ${nombre} por tu registro` : ""}

        </div>
    );
}

export default Registro;