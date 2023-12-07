
import cohetevertical from '../assets/cohetevertical.png'


export function Footer() {
    return (
        <>
            <footer>
                <div className="containerFooter" >
                    <div className="containerFooter_Logo">
                        <img src={cohetevertical} alt="" />
                        <h4> NOVA </h4>
                    </div>
                    <div className="containerFooter_Secciones">
                        <h4>Menu</h4>
                        <ul>
                            <li>Inicio</li>
                            <li>Cursos</li>
                            <li>Nosotros</li>
                        </ul>
                    </div>

                    <div className="containerFooter_Secciones">
                        <h4>Contacto</h4>
                        <ul>
                            <li>Buenos Aires, Argentina.</li>
                            <li> plataformanovaarg@gmail.com </li>
                        </ul>
                    </div>
                    <div className="containerFooter_Secciones">
                        <h4> Comunidad</h4>
                        <ul>
                            <li>Ustedes</li>
                            <li>Patrocinadores</li>
                        </ul>
                    </div>
                </div>
                <div className="hr_footer"></div>
                <div className="copyright">
                    <p>Copyright ©2023 NOVA Proyecto Final UTN </p>
                    <p> Ilustraciones: catalystsuff - webdecoded</p>
                </div>
            </footer>
        </>
    )
}
