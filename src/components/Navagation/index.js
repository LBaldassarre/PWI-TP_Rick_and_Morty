import "./Navegation.css";
import { Link } from 'react-router-dom';
export default function Navegation({hoja}){

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h1><Link className="navbar-brand" to="/">Rick & Morty</Link></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li aria-current="page" >
                            <Link className={hoja === "Characters" ? "nav-link active":"nav-link"} to="/characters">Characters</Link>
                        </li>
                        <li>
                            <Link className={hoja === "Contact" ? "nav-link active":"nav-link"} to="/contact">Contact</Link>
                        </li>
                    
                    </ul>
                </div>
            </div>
            </nav>
    )
}
// operador ternario -> condicion ? accion-true : accion-false;

//JSX -> mezcla entre HTML y JS 
//coloco entre llaves el codigo JS dentro del return()

//aplicamos la siguiente logica: si "hoja" es "Characters", marca al item con color verde, sino no .