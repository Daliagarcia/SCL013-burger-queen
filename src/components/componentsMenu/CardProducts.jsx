import React from 'react';
import '../componentsMenu/CardProducts.css';

const ViewCardProduct = (props) => {

    return (

     

          <div className="card" style={{width: '10rem', height: 'auto'}}>
            <img src={props.img} className="card-img-top" alt="..."/> 
              <div className="card-body" style={{padding: '15px'}}>
                {/* <h6 className="card-title">{props.name}</h6>
                <h6 className="card-text">$ {props.price}</h6> */}
                <a href='/' onClick={props.onClick} className="btn btn-primary">{props.name} $ {props.price}</a>
              </div>
          </div>

      

    )
    
}

export default ViewCardProduct;