<<<<<<< HEAD
import React, {Component} from 'react';
import '../assets/css/OrderChef.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { db } from '../firebaseConfig/firebase';

=======
import React, { Component } from 'react';
import '../assets/css/OrderChef.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db } from '../firebaseConfig/firebase.js'
>>>>>>> 862dc1d12e93612c396c636c80dd86bfd3667b18

class ViewOrderChef extends Component {

  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state={
      ordersReceived: [],
    }

=======
    this.state = {
      orders: []

    }
>>>>>>> 862dc1d12e93612c396c636c80dd86bfd3667b18
  }

  goBackArrow = () => {
    this.props.history.push('/home');
  }

  componentDidMount() {
<<<<<<< HEAD
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
=======
    const ordersOrdered = db.collection('orders').where('orderstate', '==', 'Preparando');
    ordersOrdered.onSnapshot((querySnapshot) => {
      const allorders = [];

      querySnapshot.forEach(doc => {
        const orderInformation = {
          dataOrder: doc.data(),
          id: doc.id
        }
        console.log(orderInformation);
        allorders.push(orderInformation);
      });

      this.setState({
        orders: allorders,
      });
    });
  }

  render() {

    return (
      <div className="container-order-chef">
        <FontAwesomeIcon id="arrowBack" icon="arrow-circle-left" onClick={this.goBackArrow.bind(this)} />

        <h1 className="tittleOrderChef">
          Pedidos Chef
      </h1>


        {this.state.orders.map((order) => {
          return (
            <div className="containerOrders" key={order.id}>

              <div className="minicontainer-orders" >
                <p className="infoOrder"> Cliente: {order.dataOrder.client} Mesa: {order.dataOrder.table}  </p>


                <div className="infoOrder"> Productos: {order.dataOrder.order.map((items, index) => {
                  return (
                    <div key={index}>
                      <p>{items.name}</p>
                      <p>{items.option}</p>
                      <p>{items.extras}</p>
                    </div>

                  )
                })} </div>
              </div>

              <div className="btns-hour-state">

                <button className="btnsOrderChef btnPedidoListo">
                  Listo para entrega
                </button>

                <p className="textStateOrder">
                  Estado: {order.dataOrder.orderstate}
                </p>
                <p className="textStateOrder">
                  Entregado: {order.dataOrder.orderdelivered}
                </p>

              </div>

            </div>

          )
        })}




>>>>>>> 862dc1d12e93612c396c636c80dd86bfd3667b18


      </div>


    </div>

  )

<<<<<<< HEAD
} 
    
=======
    )


  }

>>>>>>> 862dc1d12e93612c396c636c80dd86bfd3667b18
}

export default ViewOrderChef;