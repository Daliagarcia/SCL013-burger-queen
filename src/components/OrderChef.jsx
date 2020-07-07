import React from 'react';
import '../assets/css/OrderChef.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ViewOrderChef = (props) => {

  const goBackArrow = () => {
    props.history.push('/home');
}

    return(
      <div className="container-order-chef">
        <FontAwesomeIcon id = "arrowBack" icon = "arrow-circle-left" onClick = {goBackArrow}/>

        <h1 className="tittleOrderChef">
          Pedidos Chef
        </h1>

        <div className="containerOrders">

          <div className="container-minicontainer-btn-hour-state"> 

              <div className="minicontainer-orders">
                  <p className="infoOrder"> Cliente: </p>
                  <p className="infoOrder"> Productos: </p> 
              </div>

              <div className="btns-hour-state"> 

              <div className="btns-pedidos-chef">
                    <button className="btnsOrderChef btnPrepararPedido"> 
                        Preparar
                    </button>

                    <button className="btnsOrderChef btnPedidoListo"> 
                        Pedido listo
                    </button>
              </div>

                  <p className="textStateOrder">
                      Estado: 
                  </p>
              </div>

          </div>

        </div>

      </div>



    )
}

export default ViewOrderChef;