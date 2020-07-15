import React from 'react';
import '../componentsMenu/CardProducts.css';

const ViewCardProduct = (props) => {

    return (

        <button className="card" style={{ width: '10rem', height: '15rem' }} onClick={props.onClick}>
            <div className="card-body">
                <img src={props.img} className="card-img-top" alt="..." />
            </div>
            <div className="card-footer" > <p>{props.name}</p> <p>$ {props.price}</p> </div>
        </button>

    )
}

export default ViewCardProduct;