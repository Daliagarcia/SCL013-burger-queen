import React from 'react';


const ViewCardProduct = (props) => {

    return (

      <div className="container-card-product">

          <div className="card" style={{width: '18rem'}}>
            <img src={props.img} className="card-img-top" alt="..."/> 
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.price}</p>
                <a href="/" onClick={props.onClick} className="btn btn-primary">Agregar</a>
              </div>
          </div>

      </div>

    )
    
}

export default ViewCardProduct;