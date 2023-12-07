import React from 'react';
import { Link } from "react-router-dom";
import coheteLogo from '../multimedia/cohete_logo.png'
import cartFill from '../multimedia/cart-fill.svg'
import personFill from '../multimedia/person-fill.svg'
import gearFill from '../multimedia/gear-fill.svg'
import boxArrowLeft from '../multimedia/box-arrow-left.svg'

export function Nav() {
    return (
    <header>
        <nav className="container_nav" id="Incio">
            <div className="container_logo">
                <img width="50px" height="50px" className="img_log" src={coheteLogo} alt="Logo" />
                <h4 className="text_logo">NOVA</h4>
            </div>

            <ul className="container_list" id="container_list">
                <li className="item_list  container_submenu">
                    <a className="item_link btn_submenu" href="#Cursos">Cursos</a>
                    <ul className="submenu" id="submenu">
                        <li className="item_list_"><a href="#" className="item_link_">Programación</a></li>
                        <li className="item_list_"><a href="#" className="item_link_">Diseño</a></li>
                        <li className="item_list_"><a href="#" className="item_link_">Marketing</a></li>
                        <li className="item_list_"><a href="#" className="item_link_">Desarrollo personal</a></li>
                        <li className="item_list_"><a href="#" className="item_link_">Música</a></li>
                        <li className="item_list_"><a href="#" className="item_link_">Fotografia</a></li>
                        <li className="item_list_"><a href="#Cursos" className="item_link_">Todos los cursos</a></li>
                    </ul>
                </li>
                <li className="item_list"><a className="item_link" href="#Nosotros">Nosotros</a></li>
                <li className="item_list"><a className="item_link" href="#Contacto">Contacto</a></li>
                <li className="item_list"><Link className="item_link registro" id="login" to={"/iniciar-sesion"}>Iniciar Sesión</Link></li>

                <li className="icon_container" id="icon_cart">
                    <a href="./cart.html" id="cart"><img className="icon_cart" src={cartFill} alt="" /></a>
                    <span id="cuenta-carrito">0</span>
                    <div className="text_carrito"><a href="./cart.html">Ir al carrito</a></div>
                </li>

                <li className="icon_container" id="icon_user">
                    <a href="./pages/perfil.html" className="icon_user"><img className="icon_user" src={personFill} alt="" /></a>

                    <ul id="submenu_user" className="submenu_user">
                        <li className="item_user"><img src={gearFill} alt="" /><a href="">Configuración</a></li>
                        <li className="item_user"> <img src={boxArrowLeft} alt="" /><a id="btn_cerrar_sesion" href="#">Cerrar sesion </a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
    )
}