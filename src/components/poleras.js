import React from 'react';
import '../componentsCss/poleras.css';
import Header from './header'
import pic1 from '../images/polera1.png';

function Poleras() {
    let title1 = "Compra de poleras";
    let parrafo1 = "Gracias por apoyar a la familia de Wilstermann.";
    return (
        <div className="poleras1">
            <div className="part1">
                <Header title={title1} parrafo={parrafo1} />
                <h2>Llene el siguiente formulario:</h2>
                <form>
                    <p>Ingresa tu nombre completo: <input type="text" name="nombre" /></p>
                    <p>Ingresa tu carnet de identidad: <input type="text" name="carnet" /></p>
                    <p>Escoja el tipo de polera: <select name="tipoAsiento">
                        <option value="1">Local</option>
                        <option value="2">Suplente</option>
                        <option value="3">Tercera equipacion</option>
                    </select></p>
                    <p>Precio por polera es: 60</p>
                    <p>Cantidad de poleras: <input type="text" name="polerasCant" /></p>
                    <input type="submit" value="Registrarse" />
                </form>
            </div>
            <div className="part2">
               <img id="pol1" src={pic1} alt="" />
            </div>
        </div>
    );
}

export default Poleras;