import React, { Component } from 'react';
import '../assets/css/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderDetails from './componentsMenu/OrdersDetails';
import NameClient from './componentsMenu/NameClient';
import MenuButtons from './MenuProducts.jsx';
import { db } from '../firebaseConfig/firebase';


class ViewMenu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            client: '',
            table: '',
            order: [],
        }
    }

    goBackArrow = () => {
        this.props.history.push('/home');
    }

    forwardArrow = () => {
        this.props.history.push('/orderwaiter');
    }

    //FUNCIÓN PARA ACTUALIZAR ESTADO DEL CLIENTE
    inputNameClient(nameClient) {
        this.setState({
            client: nameClient
        })
    }
    //FUNCIÓN PARA ACTUALIZAR EL ESTADO DE LA MESA SELECCIONADA
    selectTable(tableNumber) {
        this.setState({
            table: tableNumber
        })

    }

    //FUNCIÓN PARA AGREGAR PRODUCTOS A LA ORDEN
    addFoodOrder(product) {
        this.setState((previousState) => ({
            order: [...previousState.order, product]
        }));
        console.log(this.state.order);
    }

    //FUNCIÓN PARA BORRAR PRODUCTO
    deleteProductOrder(index) {
        let actualOrder = [...this.state.order];
        actualOrder.splice(index, 1);
        this.setState({
            order: actualOrder
        });
    }

    resetOrderState() {
        this.setState({
            client: '',
            table: '',
            order: [],
        });
    }

    sendOrder() {
        if(this.state.client === '' || this.state.table === '') {
            alert('Debes indicar nombre del cliente y seleccionar mesa')
        } else {
            db.collection('orders').add({
                client: this.state.client,
                table: this.state.table,
                order: this.state.order,
                orderstate: 'Preparando',
                orderdelivered: 'No',
                timeoforder: new Date()
            })
            .then((docRef) => {
                this.resetOrderState();
                console.log(docRef);
            })
            .catch((error) => {
                console.log(error)
            }) 


        }
        
    }

    
    render() {

        return (

            <div className="container-menu">
                <div className="containerArrows">
                    <FontAwesomeIcon className="arrows" id="arrowBack" icon="arrow-circle-left" onClick={this.goBackArrow.bind(this)} />
                    <FontAwesomeIcon className="arrows" id="arrowForward" icon="arrow-circle-right" onClick={this.forwardArrow.bind(this)} />
                </div>

                <NameClient
                    inputNameClient={this.inputNameClient.bind(this)}
                    selectTable={this.selectTable.bind(this)}
                    client={this.state.client}
                />

                <div className="container-menu-orders">

                    <MenuButtons
                        addFoodOrder={this.addFoodOrder.bind(this)}
                    />

                    <div className = "container-order-btnEnviarPedido">
                        <OrderDetails
                            deleteProductOrder={this.deleteProductOrder.bind(this)}
                            total={this.state.order}
                        />

                        <div className="container-btn-enviar">
                            <button className="Button-register" onClick={() => this.sendOrder()}>Enviar pedido</button>
                            <button className="Button-register" onClick={() => this.resetOrderState()}>Cancelar pedido</button>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}


export default ViewMenu;