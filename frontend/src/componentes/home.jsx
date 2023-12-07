
import curso from '../img/curso.png'
import { FormNew } from '../componentes/forms/formNew.jsx';
import { Link } from 'react-router-dom';
import abrazoMundo from '../assets/abrazomundo.png'
import abrazoEstrella from '../assets/abrazoestrella.png'
import comunidadNova from '../assets/comunidadnova.png'
import soporte from '../assets/soporte.png'
import tutores from '../assets/tutores.png'
import { CardContainer } from './cardContainer.jsx';

export function Home() {
    return (

        <main className="main">




            <section id="container_home" className="section">
                <article className="texto">
                    <p className="promo">#1 en educacion</p>
                    <div className="nombre" >Somos NOVA</div>
                    <p className="mensaje">Tu plataforma de aprendizaje favorita </p>
                    <div className="btn_registro" id="container_btn_registro" >
                        <Link className="registro" id="btn_registro" to={"/registrar-usuario"}>¡Registrate!</Link>
                    </div>
                </article>
                <img className="astro_volando" src="./multimedia/astro_volando.png" alt="astro" />
            </section>

            {/* Boton para ir hacia el home */}

            <div>
                <section className="container_top">
                    <h1 className="titulo_top">TOP 3 FAVORITOS</h1>
                    <section className="portadas">
                        <div className="imagen">
                            <img className="img" src={curso} alt="Imagen 1" />
                        </div>
                        <div className="imagen">
                            <img className="img" src={curso} alt="Imagen 2" />
                        </div>
                        <div className="imagen">
                            <img className="img" src={curso} alt="Imagen 3" />
                        </div>
                    </section>
                    <section className="texto_">
                        <p className="contorno">
                            En nuestra plataforma, sabemos que la educación es la llave que abre las puertas hacia un futuro lleno de posibilidades. Por eso, estamos emocionados de presentarte nuestros tres cursos más solicitados, que han impactado positivamente la vida de innumerables estudiantes de todo el mundo.
                        </p>
                    </section>
                </section>

                <h2 className="titulo_cursos" id="Cursos">Todos los cursos disponibles en NOVA</h2>
                <section id="productos-container">
                    <CardContainer></CardContainer>
                </section>

                <section id="lista-cursos">
                </section>

                <div id="pagination-container" className="pagination-container">
                    <button id="prev-page" className="pagination-button">Anterior</button>
                    <span id="current-page" className="pagination-info">Página 1</span>
                    <button id="next-page" className="pagination-button">Siguiente</button>
                    <FormNew></FormNew>
                </div>
            </div>
            <section className="sectionNosotros" id="Nosotros">
                <div className="tituloNosotros">
                    <h3> Comenzá tu viaje con </h3>
                    <span><h2> Nosotros </h2></span>
                </div>

                <div className="tarjetaEleginos">
                    <img src={abrazoMundo} alt="" />
                    <p> En cualquier parte del mundo</p>
                </div>

                <div className="tarjetaEleginos">
                    <div className="tarjetaTexto">
                        <p> Con los mejores profesionales</p>
                        <span> valuados por ustedes</span>
                    </div>
                    <img src={abrazoEstrella} alt="" />
                </div>

                <div className="tarjetaEleginos">
                    <img src={comunidadNova} alt="" />
                    <div className="tarjetaTexto">
                        <p> Comunidad NOVA </p>
                        <span> Campus virtual </span>
                    </div>
                </div>

                <div className="tarjetaEleginos">
                    <div className="tarjetaTexto">
                        <p> Soporte técnico y astro bot</p>
                        <span> 24/7 </span>
                    </div>
                    <img src={soporte} alt="" />
                </div>

                <div className="tarjetaEleginos">
                    <img src={tutores} alt="" />
                    <div className="tarjetaTexto">
                        <p>Tutores durante toda la cursada</p>
                        <span> 9 de cada 10 astro-alumnos </span>
                        <span> finalizan los cursos </span>
                    </div>
                </div>
            </section>
        </main>
    );
}