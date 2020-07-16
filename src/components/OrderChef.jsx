import React, {Component} from 'react';
import '../assets/css/OrderChef.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { db } from '../firebaseConfig/firebase';


class ViewOrderChef extends Component {

  constructor(props) {
    super(props);
    this.state={
      ordersReceived: [],
    }

  }

  goBackArrow = () => {
    this.props.history.push('/home');
  }

  componentDidMount() {
    const orders = db.collection('orders').where('orderstate','==','Preparando').orderBy('timeoforder','asc');
   
    orders.onSnapshot((querySnapshot) => {

      const ordersReceived = [];

      querySnapshot.forEach((doc) => {
        const orderData = {
          infoOrder: doc.data(),
          idDoc: doc.id,
        }

        ordersReceived.push(orderData);
        console.log(orderData);

      });

      this.setState({
        ordersReceived
      })

    })

  }


render() {

  return(
    <div className="container-order-chef">
      <FontAwesomeIcon id = "arrowBack" icon = "arrow-circle-left" onClick = {this.goBackArrow.bind(this)}/>

      <h1 className="tittleOrderChef">
        Pedidos Chef
      </h1>

      <div className="containerOrders">

        <div className="container-minicontainer-btn-hour-state"> 

        {console.log(this.state.ordersReceived)}

          {this.state.ordersReceived.map((order) => {
            return(
            
            
            <div>
                <div className="minicontainer-orders">
                  <p className="infoOrder"> Cliente: {order.infoOrder.client} Mesa: {order.infoOrder.table}</p>
                  <p className="infoOrder"> Productos: {order.infoOrder.order}</p> 
                </div>

                <p className="textStateOrder">
                  Hora: {order.infoOrder.timeoforder}
                </p>

                <p className="textStateOrder">
                  Estado: {order.infoOrder.orderstate} Entregado: {order.infoOrder.orderdelivered}
                </p>

            </div>
            )
          }
        )
      }
            
            <div className="btns-pedidos-chef">
                  <button className="btnsOrderChef btnPedidoListo"> 
                      Pedido listo
                  </button>
            </div>

        </div>

      </div>


    </div>

  )

} 
    
}

export default ViewOrderChef;