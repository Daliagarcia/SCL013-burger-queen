import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class OrderDetails extends Component {

 deleteProduct = (index) => {
        this.props.deleteProductOrder(index)
    }

totalOrderSum = () => {

    let sumTotal = 0;
    this.props.total.map(ev => {
        sumTotal += ev.price;

        if(ev.extras != null){
            ev.extras.map(ext => {

                let indexExt = ext.indexOf('$');
                let resultExtra = ext.substring(indexExt +1, ext.length);
                sumTotal += parseInt(resultExtra)
            });
        }
    });

    return sumTotal;
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
                                            <p className="infoProduct nameProduct">{product.name}</p>
                                                <p className="infoProduct priceProduct">$ {product.price}</p>
                                                <p className="infoProduct trashProduct" onClick={() => this.deleteProduct(index)}>
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
                                        <p className="infoProduct trash" onClick={() => this.deleteProduct(index)}>
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
                        <p className="textTotal">$ {this.totalOrderSum()}</p>
                    </div>
             
        </div>

                /* <div className="container-btn-enviar">
                    <button className="Button-register">Enviar pedido</button>
                </div> 

 */

        );
    }

}

export default OrderDetails; 
