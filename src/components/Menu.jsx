import React, { Component } from 'react';
import '../assets/css/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderDetails from './componentsMenu/OrdersDetails';
import NameClient from './componentsMenu/NameClient';
import ViewCardProduct from './componentsMenu/CardProducts';
import jsonData from "../dataMenu/DataFood.json";

class ViewMenu extends Component {

    constructor (props){ 
        super(props)

        this.state = {
            breakfast:false,
            lunch:false,
            dessert:false
        }
    }

    showBreakfast = () => {
        this.setState({ 
            breakfast:this.state.breakfast,
            lunch:false,
            dessert:false
        }) 
    }

    showLunchAndDinner = () => {
        this.setState({ 
            breakfast:false,
            lunch:this.state.lunch,
            dessert:false
        }) 
    }

    showDessert = () => {
        this.setState({ 
            breakfast:false,
            lunch:false,
            dessert:this.state.dessert
        }) 
    }

    goBackArrow = () => {
        // props.history.push('/home');
    }

    forwardArrow = () => {
        // props.history.push('/orderwaiter');
    }

    render() {

    //LEER DATA Y CARD 
        const DataMenu =         
        jsonData.Breakfast.map((ev) => {
            return (
            <ViewCardProduct img={ev.img} name={ev.name} price={ev.price}/>
        )
    }) 

        return (

            <div className="container-menu">
                <div className="containerArrows">
                    <FontAwesomeIcon className="arrows" id="arrowBack" icon="arrow-circle-left" onClick={this.goBackArrow.bind(this)} />
                    <FontAwesomeIcon className="arrows" id="arrowForward" icon="arrow-circle-right" onClick={this.forwardArrow.bind(this)} />
                </div>
    
                    <NameClient />
    
                <div className="container-btns-menu">
                    <button className="Button-register btn-Menu" >Desayuno</button>
                    <button className="Button-register btn-Menu">Almuerzo y cena</button>
                    <button className="Button-register btn-Menu">Postres</button>
                </div>
    
                <div className="container-menu-orders">

                    {DataMenu}

                    <OrderDetails />
    
                </div>
    
            </div>
        )
     }
    
}


export default ViewMenu;