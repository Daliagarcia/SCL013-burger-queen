import React, { Component, Fragment } from 'react';
import '../assets/css/OrderWaiter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db } from '../firebaseConfig/firebase.js';
import Modal from './Modal.jsx';

class ViewOrderWaiter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      ordersready: [],
      modalOn: false,
      selectedOrder: {}

    }
  }

  goBackArrow = () => {
    this.props.history.push('/menu');
  }

  //FUNCIÓN QUE CIERRA MODAL
  modalOff = () => {
    this.setState({
      modalOn: !this.state.modalOn,
      selectedOrder: null
    });
  }

  //FUNCIÓN QUE ABRE MODAL PARA CAMBIAR EL ESTADO DEL PEDIDO A LISTO
  handleClickBtnOrderDelivered = (event, order) => {
    event.preventDefault();

    this.setState({
      modalOn: true,
      selectedOrder: order
    })
    console.log(this.state.selectedOrder)

  }

  componentDidMount() {
    //TRAE LA COLECCION DE ORDERS DE FIREBASE PARA MOSTRARLA EN EL COMPONENTE DE VISTA PEDIDOS DEL MESERO
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

    const ordersReadyForDelivery = db.collection('orders').where('orderstate', '==', 'Listo para entregar');
    ordersReadyForDelivery.onSnapshot((querySnapshot) => {
      const ordersReadyOnly = [];

      querySnapshot.forEach((doc) => {
        const orderInfoReady = {
          dataOrderReady: doc.data(),
          id: doc.id
        }

        ordersReadyOnly.push(orderInfoReady);
        console.log(orderInfoReady);
      });

      this.setState({
        ordersready: ordersReadyOnly,
      });
    })
  }

  //FUNCIÓN PARA CREAR EL MODAL QUE CONFIRMARA SI LA ORDEN ESTA LISTA PARA ENTREGAR
  showingModal(order) {
    console.log('order modal', order);
    return (
      <Modal
        show={this.state.modalOn}
        closeCallback={this.modalOff}
        customClass="custom_modal_class"
      >
        <Fragment>
          <div className="modal-header-chef">
            <h3 className="modal-title">¿Se entregó el pedido con éxito?</h3> <span onClick={() => this.modalOff()} className="close-modal" >X</span>
          </div >

          <div className="modal-footer-chef">
            <button type="button" className="Button-register btn-Menu" onClick={() => this.modalOff()} >NO</button>
            <button type="button" className="Button-confirm-order" onClick={() => this.deleteOrderDelivered(order.id)} >SI</button>
          </div>
        </Fragment>
      </Modal>
    )
  }

  deleteOrderDelivered(id) {
    db.collection('orders').doc(id).delete()
      .then(() => {
        this.modalOff();
        console.log('Document successfully deleted!');
      })
      .then(() => {
        alert('Pedido entregado con éxito!')
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.log('Error removing document: ', error);
      });

  }

  render() {

    const { modalOn, selectedOrder } = this.state;

    return (
      <div className="container-order-waiter">
        <FontAwesomeIcon id="arrowBack" icon="arrow-circle-left" onClick={this.goBackArrow.bind(this)} />

        <h1 className="tittleOrderWaiter">
          Pedidos Mesero
        </h1>

        {/* ORDENES LISTAS PARA ENTREGAR AL CLIENTE */}
        {this.state.ordersready.map((order) => {
          return (
            <div className="container-orders" key={order.id}>

              <div className="minicontainer-orders-ready">
                <p className="infoClient"> Cliente: {order.dataOrderReady.client} |</p>
                <p className="infoClient"> {order.dataOrderReady.table}  </p>
                <p className="infoOrder"> Total: </p>
                <p className="infoOrder"> Productos: {order.dataOrderReady.order.map((items, index) => {
                  return (
                    <div className="orderProduct" key={index}>
                      <p>{items.name}</p>
                      <p>{items.option}</p>
                      <p>{items.extras}</p>
                    </div>
                  )
                })}
                </p>
              </div>

              <div className="btns-hour-state">

                <button className="btnsOrderChef" onClick={(event) => this.handleClickBtnOrderDelivered(event, order)}>
                  Entregar pedido
                </button>

                <div className="infoState">

                  <p className="textStateOrder"> Estado:⠀<span className="stateOrder">
                    {order.dataOrderReady.orderstate}
                  </span></p>

                  <p className="textDeliveredOrder"> ¿Entregado?: <span className="stateOrder">
                    {order.dataOrderReady.orderdelivered}
                  </span></p>

                  {/* <p className="textDeliveredOrder"> ¿Entregado?: <span className="stateOrder">
                    {order.dataOrder.timeoforder}
                  </span></p>   */}

                </div>
              </div>
            </div>
          )
        })}

        {/* ORDENES SIENDO PREPARADAS AUN POR EL CHEF */}
        {this.state.orders.map((order) => {
          return (
            <div className="container-orders" key={order.id}>

              <div className="minicontainer-orders">
                <p className="infoClient"> Cliente: {order.dataOrder.client} |</p>
                <p className="infoClient"> {order.dataOrder.table}  </p>
                <p className="infoOrder"> Total: </p>
                <p className="infoOrder"> Productos: {order.dataOrder.order.map((items, index) => {
                  return (
                    <div className="orderProduct" key={index}>
                      <p>{items.name}</p>
                      <p>{items.option}</p>
                      <p>{items.extras}</p>
                    </div>
                  )
                })}
                </p>
              </div>

              <div className="btns-hour-state">

                <div className="infoState">

                  <p className="textStateOrder"> Estado:⠀<span>
                    {order.dataOrder.orderstate}
                  </span></p>

                  <p className="textDeliveredOrder"> ¿Entregado?: <span className="stateOrder">
                    {order.dataOrder.orderdelivered}
                  </span></p>

                  {/* <p className="textDeliveredOrder"> ¿Entregado?: <span className="stateOrder">
                    {order.dataOrder.timeoforder}
                  </span></p>   */}

                </div>

              </div>
            </div>

          )
        })}
        {modalOn && this.showingModal(selectedOrder)}
      </div >
    )
  }
}

export default ViewOrderWaiter;