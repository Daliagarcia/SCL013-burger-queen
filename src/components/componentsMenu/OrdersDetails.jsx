import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class OrderDetails extends Component {

    /* deleteProduct = (index) => {
        this.props.deleteProductOrder(index)
    }

    render() {

        return (

        <div className="container-order-total">

            <div className="container-order-btnEnviarPedido">

                        {this.props.total.map((product, index) => {

                            if(product.option !== undefined ){
                                return(
                                    <div className="container-orders">

                                        <div className="miniContainer-product" key={product.id}>
                                            <p className="infoProduct">{product.name}</p>
                                            <p className="infoProduct">$ {product.price}</p>
                                            <p className="infoProduct" onClick={() => this.deleteProduct(index)}>
                                            <FontAwesomeIcon icon="trash" />
                                            </p>
                                        </div>

                                        <div className="miniContainer-option">
                                            <p className="infoProduct">{product.option}</p> 
                                            {product.extras.map((ext) => {
                                                return(
                                                    <p className="infoProduct">{ext}</p>
                                                )
                                            })}
                                        </div>
                                </div> 
                                )
                            }else{
                                return(
                                    <div className="miniContainer-product" key={product.id}>
                                        <p className="infoProduct">{product.name}</p>
                                        <p className="infoProduct">$ {product.price}</p>
                                        <p className="infoProduct" onClick={() => this.deleteProduct(index)}>
                                        <FontAwesomeIcon icon="trash" />
                                        </p>
                                    </div>
                                )
                            }
                        }
                    )
                }

        </div>
                        
                    <div className="miniContainer-total">
                        <p className="textTotal">TOTAL</p>
                        <p className="textTotal">{this.totalOrderSum}</p>
                    </div>
             
        </div>

         */
                /* <div className="container-btn-enviar">
                    <button className="Button-register">Enviar pedido</button>
                </div> 


        );
    }

}
 */
export default OrderDetails; 
