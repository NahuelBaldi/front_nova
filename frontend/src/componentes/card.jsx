import { FormEdit } from "./forms/formEdit";
import { Link } from 'react-router-dom';

export function Card(props) {
    const card = props.card
    return (
        <>
            <div className="tarjeta-producto">

                <div>titulo: <h3 className="nombre_producto">{card.title}</h3></div>
                <div>{card.image}</div>
                <p className="descripcion">{card.description}</p>
                <p className="precio">{card.price}</p>
                <p>{card.category}</p>

            </div>




            <Link to={"/editar-curso"}>EditarCurso</Link>
        </>
    );
}