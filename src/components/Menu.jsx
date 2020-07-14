import React, { Component } from 'react';
import '../assets/css/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderDetails from './componentsMenu/OrdersDetails';
import NameClient from './componentsMenu/NameClient';
import MenuButtons from './MenuProducts.jsx';


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

    addFoodOrder(product) {
        this.setState((previousState) => ({
            order: [...previousState.order, product]
        }));
        console.log(this.state.order);

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
                    addFoodOrder = {this.addFoodOrder.bind(this)}
                    />
                
                             
                 
                    <OrderDetails />

                </div>

            </div>
        )
    }

}


export default ViewMenu;