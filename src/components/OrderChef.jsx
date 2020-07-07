import React from 'react';
import '../assets/css/OrderChef.css';


const ViewOrderChef = () => {

    return(
      <div className="container-order-chef">

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