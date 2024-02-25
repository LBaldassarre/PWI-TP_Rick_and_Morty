import "./Navegation.css";
import { Link } from 'react-router-dom';
export default function Navegation({hoja}){

    return(
        <nav className="nav-container navbar navbar-expand-lg w-100">
            <div className="container-fluid justify-content-between align-items-center">
                <Link className="text-decoration-none" to="/"><h1 className="rm-h navbar-brand cursor-p">Rick & Morty</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="nav-buttons nav nav-pills">
                        <li className="nav-item" >
                            <Link className={hoja === "Characters" ? "nav-link text-decoration-none active":"text-decoration-none nav-link"} to="/characters">Characters</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={hoja === "Contact" ? "nav-link text-decoration-none active":"text-decoration-none nav-link"} to="/contact">Contact</Link>
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