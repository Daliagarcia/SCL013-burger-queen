import React from 'react';
import '../assets/css/Menu.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ViewMenu = () => {
 

    return(

        <div className="container-menu">

        <div className="nameClient"> 
            <h3 className="textName">Nombre del cliente</h3>
            <input type="nameClient" id="nameClient"/>
        </div>

        <div className="container-card-product">

        </div>

        <div className="container-btns-menu">
            <button className = "Button-register btn-Menu">Desayuno</button>
            <button className = "Button-register btn-Menu">Almuerzo y cena</button>
            <button className = "Button-register btn-Menu">Postres</button>
        </div>
            
        <div className="container-pedidos-btnEnviarPedido">

            <div className="container-pedidos">

                <div className="miniContainer-product">
                    <p className="infoProduct"> NOMBRE PRODUCTO </p>
                    <p className="infoProduct">PRECIO</p>
                    <FontAwesomeIcon icon="trasher" /> 
                </div>

                <div className="miniContainer-total">
                    <p className="textTotal">TOTAL</p>
                </div>
            </div>

            <div className="container-btn-enviar">
                <button className = "Button-register">Enviar pedido</button>
            </div>

        </div>




        </div>
    )
}


export default ViewMenu;