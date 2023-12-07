
import React, { useState } from 'react';
import planetaamarillo from '../assets/planetaamarillo.png';



// Componente para el formulario de contacto
const FormularioContacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí podrías realizar acciones con los datos del formulario, como mostrarlos en consola
        console.log('Datos de contacto:', formData);
        // También podrías llamar a una función externa para manejar estos datos
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <section className="sectionContacto" id="Contacto">
                    <div className="diseñoFormulario">
                        <div > <img src={planetaamarillo} className="planeta1 planeta" alt="Planeta" /></div>
                        <div > <img src={planetaamarillo} className="planeta2 planeta" alt="Planeta" /> </div>
                        <div > <img src={planetaamarillo} className="planeta3 planeta" alt="Planeta" /></div>
                        <div > <img src={planetaamarillo} className="planeta4 planeta" alt="Planeta" /> </div>
                        <div > <img src={planetaamarillo} className="planeta5 planeta" alt="Planeta" /></div>

                        <div className="container">
                            <div className="form_">

                                <h2 className="titulo">Contactanos</h2>
                                <div className="inputForm">
                                    <input type="text" placeholder="Nombre" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} />
                                </div>
                                <div className="inputForm">
                                    <input type="email" placeholder="Email" id="emailContacto" name="email" autoComplete="email" value={formData.email} onChange={handleInputChange} />
                                </div>
                                <div className="inputForm">
                                    <textarea name="message" id="message" value={formData.mensaje} onChange={handleInputChange}></textarea>
                                </div>
                                <div className="inputForm">
                                    <input type="submit" value="Enviar" />
                                </div>
                                <p className="text_">¡Enseguida te contactamos!</p>
                                <p className="text_">¿No tenes cuenta? <a href="#">Registrate</a></p>

                            </div>
                        </div>
                    </div>
                </section>

            </form>
        </div>
    );
};
export { FormularioContacto };