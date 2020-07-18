import React, { Component, Fragment } from 'react';
import '../assets/css/OrderChef.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db } from '../firebaseConfig/firebase.js';
import Modal from './Modal.jsx';

class ViewOrderChef extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      modalOn: false,
      selectedOrder: {}

    }
  }

  goBackArrow = () => {
    this.props.history.push('/home');
  }

  //FUNCIÓN QUE CIERRA MODAL
  modalOff = () => {
    this.setState({
      modalOn: !this.state.modalOn,
      selectedOrder: null
    });
  }

  //FUNCIÓN QUE ABRE MODAL PARA CAMBIAR EL ESTADO DEL PEDIDO A LISTO
  handleClickBtnOrderReady = (event, order) => {
    event.preventDefault();

    this.setState({
      modalOn: true,
      selectedOrder: order
    })
    console.log(this.state.selectedOrder)

  }


  componentDidMount() {
    //TRAE LA COLECCION DE ORDERS DE FIREBASE PARA MOSTRARLA EN EL COMPONENTE DE VISTA PEDIDOS CHEF
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
            <h3 className="modal-title">¿Está el pedido listo para servir?</h3> <span onClick={() => this.modalOff()} className="close-modal" >X</span>

          </div >


          <div className="modal-footer-chef">

            <button type="button" className="Button-register btn-Menu" onClick={() => this.modalOff()} >Cancelar</button>
            <button type="button" className="Button-confirm-order" onClick={() => this.changeOrderState(order.id)} >Confirmar</button>
          </div>

        </Fragment>
      </Modal>

    )
  }
  //FUNCIÓN PARA EDITAR EL ORDER STATE DEL PEDIDO Y CAMBIARLO A LISTO PARA ENTREGAR
  changeOrderState(id) {
    const docOrderRef = db.collection('orders').doc(id);
    return docOrderRef.update({
      orderstate: 'Listo para entregar'
    })
      .then(() => {
        this.modalOff();
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.log('Error updating document: ', error);
      });

  }

  render() {

    const { modalOn, selectedOrder } = this.state;

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

                <button className="btnsOrderChef" onClick={(event) => this.handleClickBtnOrderReady(event, order)}>
                  Listo para servir
                </button>

                <div className="infoState">

                  <p className="textStateOrder"> Estado:⠀<span className="stateOrder">
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

      </div>

    );
  }
}

export default ViewOrderChef;