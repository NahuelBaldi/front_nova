import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export function FormRegistro({ onClose }) {
    const [showFormRegistro, setShowFormRegistro] = useState(false);

    const handleOpen = () => {
        setShowFormRegistro(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setShowFormRegistro(false);
    };

    const handleClose = () => {
        setShowFormRegistro(false);
    };

    return (
        <>
                <div className="diseñoFormulario" id="container_registro">
                    <form className="form" id="form_registro" onSubmit={handleSubmit}>
                        <h2 className="titulo">Registrarse</h2>
                        <span className="close" id="btn_cerrar_registro" onClick={onClose}>
                            <a href="#nav_bar">
                                <Link to={"/"}>
                                    <img className="icon_close" src="./multimedia/close.svg" alt="" />
                                </Link>
                            </a></span>

                        <div className="inputForm">
                            <input type="text" placeholder="Nombre de usurario" id="user_name_registro" />
                        </div>
                        <div className="inputForm">
                            <input type="email" placeholder="Email" id="email_registro" autoComplete="email" />
                        </div>
                        <div className="inputForm">
                            <input type="password" placeholder="Contraseña" id="password_registro" />
                        </div>
                        <div className="inputForm">
                            <input type="submit" value="Enviar" id="btn_registrarse" />
                        </div>
                        <p className="text">¿Ya tenes cuenta? <a href="#" className="registro_inicio_sesion"  ><Link to={"/iniciar-sesion"}>¡Inicia sesión!</Link></a> </p>

                    </form>
                </div >

        </>
    );
}
