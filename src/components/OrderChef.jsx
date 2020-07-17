import React, { Component } from 'react';
import '../assets/css/OrderChef.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db } from '../firebaseConfig/firebase.js'

class ViewOrderChef extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: []

    }
  }

  goBackArrow = () => {
    this.props.history.push('/home');
  }

  componentDidMount() {
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
                <p className="infoClient"> Cliente: {order.dataOrder.client} | </p>
                <p className="infoClient"> {order.dataOrder.table}  </p>


                <div className="infoOrder"> 
                <p className="tittleProducts"> Productos: </p> {order.dataOrder.order.map((items, index) => {
                  return (
                    <div className="orderProduct" key={index}>
                      <p>{items.name}</p>
                      <p>{items.option}</p>
                      <p>{items.extras}</p>
                    </div>

                  )
                })} </div>
              </div>

              <div className="btns-hour-state">

                <button className="btnsOrderChef">
                  Listo para servir
                </button>

                <div className="infoState">

                  <p className="textStateOrder"> Estado:⠀
                   {order.dataOrder.orderstate} 
                  </p>
                  
                  <p className="textDeliveredOrder"> ¿Entregado?:⠀
                  {order.dataOrder.orderdelivered} 
                  </p>
                  
                
                </div>
                

              </div>

            </div>

          )
        })}






      </div>



    )


  }

}

export default ViewOrderChef;