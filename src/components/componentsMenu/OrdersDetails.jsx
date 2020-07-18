import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class OrderDetails extends Component {

    deleteProduct = (index) => {
        this.props.deleteProductOrder(index)
    }

    totalOrderSum = () => {

        let sumTotal = 0;
        this.props.total.map(ev => {
            sumTotal += ev.price;

            if (ev.extras != null) {
                ev.extras.map(ext => {

                    let indexExt = ext.indexOf('$');
                    let resultExtra = ext.substring(indexExt + 1, ext.length);
                    sumTotal += parseInt(resultExtra)
                });
            }
        });

        return sumTotal;
    }

    render() {

        //console.log('props total', this.props.total)
        return (

            <div className="container-order-total">

                <div className="container-orders-principal">

                    {this.props.total.map((product, index) => {

                        if (product.option !== undefined) {
                            return (
                                <div className="container-orders-details" key={index}>

                                    <div className="miniContainer-product" >
                                        <p className="infoProduct nameProduct">{product.name} {product.option}</p>
                                        <p className="infoProduct priceProduct">$ {product.price}</p>
                                        <p className="infoProduct trashProduct" onClick={() => this.deleteProduct(index)}>
                                            <FontAwesomeIcon icon="trash" />
                                        </p>
                                    </div>

                                   <div className="miniContainer-option">
                                        {product.extras.map((extra, index) => {
                                            return (
                                                <p className="infoProduct" key ={index}>{extra}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="miniContainer-product" key={index}>
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
        );
    }
}

export default OrderDetails; 
