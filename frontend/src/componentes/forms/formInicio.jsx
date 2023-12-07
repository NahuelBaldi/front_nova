import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export function FormInicio({ onClose }) {
    const [showFormInicio, setShowFormInicio] = useState(false);

    const handleToggleForm = () => {
        setShowFormInicio(!showFormInicio);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setShowFormInicio(false);
    };

    return (
        <>

            <div className="diseñoFormulario" id="container_sesion">
                <form className="form" id="form_inicio" onSubmit={handleSubmit}>

                    <h2 className="titulo">Inicio de Sesion</h2>
                    <span className="close" id="btn_cerrar" onClick={onClose} >
                        <Link to={"/"}>
                        <img className="icon_close" src="./multimedia/close.svg" alt="" />
                        </Link>
                    </span>
                    <div className="inputForm">
                        <input type="email" placeholder="Email" id="email" autoComplete="email" />
                    </div>
                    <div className="inputForm">
                        <input type="password" placeholder="Contraseña" id="password" />
                    </div>
                    <div className="inputForm">
                        <input type="submit" value="Enviar" id="btn_inicio" />
                    </div>
                    <p className="text">¿No tenes cuenta?
                        <a href="#" className="registro_inicio_sesion" >
                        <Link to={"/registrar-usuario"}>¡Registrate!</Link>
                        </a> </p>

                </form>
            </div>

        </>
    );
}