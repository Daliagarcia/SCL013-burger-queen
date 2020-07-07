import React from 'react';
import '../assets/css/OrderWaiter.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ViewOrderWaiter = (props) => {

  const goBackArrow = () => {
    props.history.push('/menu');
}

    return(
      <div className="container-order-waiter">
        <FontAwesomeIcon id = "arrowBack" icon = "arrow-circle-left" onClick = {goBackArrow} />

        <h1 className="tittleOrderWaiter">
          Pedidos Mesero
        </h1>

        <div className="containerOrders">

          <div className="container-minicontainer-btn-state"> 

              <div className="minicontainer-orders">
                  <p className="infoOrder"> Cliente: </p>
                  <p className="infoOrder"> Total: </p>
                  <p className="infoOrder"> Productos: </p> 
              </div>

              <div className="btn-state"> 
                  <button className="btnEntregarPedido"> 
                      Entregar pedido 
                  </button>

                  <p className="textStateOrder">
                      Estado: 
                  </p>
              </div>

          </div>

        </div>

      </div>

    )
}

export default ViewOrderWaiter;