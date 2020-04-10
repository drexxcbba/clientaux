import React from 'react';
import '../componentsCss/entradas.css';
import Header from './header'
import pic from '../images/partido.jpg'

function Entrada() {
    let title1 = "Compra de entradas";
    let parrafo1 = "Gracias por apoyar a la familia de Wilstermann.";
    return (
        <div className="entradas1">
            <div className="part1">
                <Header title={title1} parrafo={parrafo1} />
                <h2>Llene el siguiente formulario:</h2>
                <form action="valores.php">
                    <p>Ingresa tu nombre completo: <input type="text" name="nombre" /></p>
                    <p>Ingresa tu carnet de identidad: <input type="text" name="carnet" /></p>
                    <p>Escoja el tipo de asiento: <select name="tipoAsiento">
                        <option value="1">Preferencia</option>
                        <option value="2">General</option>
                        <option value="3">CurvaNorte</option>
                        <option value="4">CurvaSur</option>
                    </select></p>
                    <p>Precio por entrada es: 60</p>
                    <p>Cantidad de entradas: <input type="text" name="entradasCant" /></p>
                    <input type="submit" value="Registrarse" />
                </form>
            </div>
            <div className="part2">
                <img id='imgEnt' src={pic} alt="" />
            </div>
        </div>
    );
}

export default Entrada;