import "./estilos.css"
import Cursos from "./Cursos";
import Perfil from "./Perfil";
import { BrowserRouter, Link } from "react-router-dom";
function Rutas() {
    return (
        <div className="padre">
            <div className="ind">
                <center><h1>HOLA MUNDO ESTO ES MI PAGINA DE REPASO</h1></center>
                <ul>
                    <li><Link to={"/Pag2"}>PAGINA2</Link></li>
                </ul>
            </div>
            <div className="pr">
                <Cursos></Cursos>
            </div>
            <div className="izq">
                <h1>PROGRAMACION WEB-2</h1>
                <h2>INFORMATICA</h2>
            </div>
            <div className="cen">
                <Perfil></Perfil>
            </div>
            <div className="der">
                <ul>
                    <li><Link to={"https://github.com/Alexprog12"}>GITHUB</Link></li>
                </ul>
            </div>
            <div className="fot">
                <h1>ARIEL ALEX NARVAEZ CRUZ</h1>
                <h2>C.I: 13086737</h2>
            </div>
        </div>
    );
}
export default Rutas;
