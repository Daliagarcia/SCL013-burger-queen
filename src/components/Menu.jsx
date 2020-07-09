import React, { Component } from 'react';
import '../assets/css/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderDetails from './componentsMenu/OrdersDetails';
import NameClient from './componentsMenu/NameClient';
import ViewCardProduct from './componentsMenu/CardProducts';
import jsonData from "../dataMenu/DataFood.json";

class ViewMenu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            breakfast: false,
            lunch: false,
            dessert: false,
            client: '',
            table: ''
        }
    }

    showBreakfast = () => {
        this.setState({
            breakfast: true,
            lunch: false,
            dessert: false
        })
    }

    showLunchAndDinner = () => {
        this.setState({
            breakfast: false,
            lunch: true,
            dessert: false
        })
    }

    showDessert = () => {
        this.setState({
            breakfast: false,
            lunch: false,
            dessert: true
        })
    }

    goBackArrow = () => {
        this.props.history.push('/home');
    }

    forwardArrow = () => {
        this.props.history.push('/orderwaiter');
    }

//Función para actualizar estado del cliente
    inputNameClient(nameClient) {
        this.setState({
            client: nameClient
        })
    }
//Función para actualizar el estado de la mesa seleccionada
    selectTable(tableNumber) {
        this.setState({
            table: tableNumber
        })
      
    }

    render() {

        //LEER DATA Y CARD 
        const DataMenuBreakfast =
            jsonData.Breakfast.map((ev) => {
                return (
                    <ViewCardProduct key={ev.id} img={ev.img} name={ev.name} price={ev.price} />
                )
            })

        const DataMenuLunch =
            jsonData.LunchAndDinner.map((ev) => {
                return (
                    <ViewCardProduct key={ev.id} img={ev.img} name={ev.name} price={ev.price} />
                )
            })

        const DataMenuDessert =
            jsonData.Desserts.map((ev) => {
                return (
                    <ViewCardProduct key={ev.id} img={ev.img} name={ev.name} price={ev.price} />
                )
            })

        return (

            <div className="container-menu">
                <div className="containerArrows">
                    <FontAwesomeIcon className="arrows" id="arrowBack" icon="arrow-circle-left" onClick={this.goBackArrow.bind(this)} />
                    <FontAwesomeIcon className="arrows" id="arrowForward" icon="arrow-circle-right" onClick={this.forwardArrow.bind(this)} />
                </div>

                <NameClient 
                inputNameClient= {this.inputNameClient.bind(this)}
                selectTable= {this.selectTable.bind(this)}
                client = {this.state.client}
                                
                />

                <div className="container-btns-menu">
                    <button className="Button-register btn-Menu" onClick={this.showBreakfast.bind(this)}>Desayuno</button>
                    <button className="Button-register btn-Menu" onClick={this.showLunchAndDinner.bind(this)}>Almuerzo y cena</button>
                    <button className="Button-register btn-Menu" onClick={this.showDessert.bind(this)}>Postres</button>
                </div>

                <div className="container-menu-orders">

                    <div className = "container-card-product">
                        {this.state.breakfast ? DataMenuBreakfast :
                            this.state.lunch ? DataMenuLunch :
                                this.state.dessert ? DataMenuDessert : null}
                    </div>
                    <OrderDetails />

                </div>

            </div>
        )
    }

}


export default ViewMenu;