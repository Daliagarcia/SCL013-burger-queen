import React from 'react';
import '../componentsMenu/CardProducts.css';

const ViewCardProduct = (props) => {


    return (
     

          <button className="card" style={{width: '10rem', height: 'auto'}} onClick = {props.onClick}>
            <div className="card-body">
                {/* <h6 className="card-title">{props.name}</h6>
                <h6 className="card-text">$ {props.price}</h6>
                <a href='/' onClick={props.onClick} className="btn btn-primary">Agregar</a> */}
                <img src={props.img} className="card-img-top" alt="..."/> 
            </div>
              <div className="card-footer" > <p>{props.name}</p> <p>$ {props.price}</p> </div>
          </button>

      

    )
    
}

export default ViewCardProduct;