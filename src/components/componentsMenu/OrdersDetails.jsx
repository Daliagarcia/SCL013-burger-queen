import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class OrderDetails extends Component {




    render() {
        return (
            <div className="container-order-btnEnviarPedido">

                <div className="container-orders">

                    <div className="miniContainer-product">
                        <p className="infoProduct"> NOMBRE PRODUCTO {this.props.name} </p>
                        <p className="infoProduct">PRECIO</p>
                        <p className="infoProduct"><FontAwesomeIcon icon="trash" /></p>
                    </div>

                    <div className="miniContainer-total">
                        <p className="textTotal">TOTAL</p>
                        <p className="textTotal">$ 0</p>
                    </div>
                </div>

                <div className="container-btn-enviar">
                    <button className="Button-register">Enviar pedido</button>
                </div>

            </div>

        );
    }

}

export default OrderDetails;
