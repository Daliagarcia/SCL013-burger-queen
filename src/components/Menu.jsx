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
            table: '',
            foodSelected: null,
            option: null,
            extra: [],
            modalOn: false
        }
    }
    //FUNCIONES PARA MOSTRAR Y OCULTAR SEGÚN EL BOTOÓN DEL MENÚ SELECCIONADO
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

    modalOff = () => {
        this.setState({
            foodSelected: null,
            option: null,
            extra: [],
            modalOn: false
        })
    }
    //FUNCIÓN QUE TOMA EL VALOR DEL OPTION SELECCIONADO AL SUCEDER EL CAMBIO
    handleChangeInOption = (ev) => {
        const optionValue = ev.target.value;
        this.setState({
            option: optionValue,
        })
    }
    //FUNCIÓN QUE TOMA EL VALOR DEL EXTRA SELECCIONADO EN EL MODAL
    handleChangeInExtra = (ev) => {
        const extraValue = ev.target.value;
        this.setState((previousState) => ({
            extra: [...previousState.extra, extraValue]
        }))
    }

    //FUNCIÓN PARA ACTUALZAR EL MODAL Y SUS PRODUCTOS
    addProductsModal = () => {
        const itemsShowInModal = {
            id: this.state.foodSelected.id,
            name: this.state.foodSelected.name,
            price: this.state.foodSelected.price,
            option: this.state.option,
            extra: this.state.extras
        }

        this.props.addFoodOrder(itemsShowInModal);
        this.modalOff();
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
    //FUNCIÓN PARA SELECCIONAR CON CLICK LA COMIDA DEL MENÚ
    handleClickFoodSelected = (event, food) => {
        event.preventDefault();
        console.log('-food', food)
        //condición que verifica si el producto tiene opciones de proteína
        if (typeof food.option === "undefined" && typeof food.extras === "undefined") {
            return this.props.addFoodOrder(food);
        }
        //Actualiza el state del modal a true y le pasa el value de food al state de foodSelected
        this.setState({
            foodSelected: food,
            modalOn: true
        })
    }


    //Función para crear el modal
    showingModal(food) {
        return (
            <div className="modal-dialog" key={food.id} show={this.state.modalOn} hide={() => this.modalOff()} >
                <div className="modal-header">
                    <div className="modal.tittle">{food.name}</div> <span className="close" >X</span>
                </div>

                <div className="modal-body">
                    <div className="row">
                        <div className="col-6" onChange={(ev) => this.handleChangeInOption(ev)}>
                            <p>Elegir tipo</p>
                            {food.option.map((option) => {
                                return (
                                    <label className="container" key={option.id}>
                                        <input type="radio" value={option.name} name="radio" required />
                                        {option.name} </label>
                                )
                            })}

                        </div>

                        <div className="col-6" onChange={(ev) => this.handleChangeInExtra(ev)}>
                            <p>Elegir extra</p>
                            {food.extra.map((extra) => {
                                return (
                                    <label className="container" >
                                        <input key={extra.id} type="radio" value={extra.name} name={`${extra.name} ${extra.price}`} />
                                        {extra.name} $ {extra.price} </label>

                                )
                            })}

                        </div>


                    </div>
                    
                </div>

                <div className="modal-footer">
                    <button type="button" className="secondary">Close</button>
                    <button type="button" className="primary" onClick={this.addProductsModal()} >Agregar</button>
                </div>
            </div>




        )
    }



    render() {

        //LEER DATA DEL MENÚ Y MOSTRAR CARDS CON CADA ITEM DEL MENÚ 
        const DataMenuBreakfast =
            jsonData.Breakfast.map((food) => {
                return (
                    <ViewCardProduct key={food.id} img={food.img} name={food.name} price={food.price} onClick={e => this.handleClickFoodSelected(e, food)} />
                )
            })

        const DataMenuLunch =
            jsonData.LunchAndDinner.map((food) => {
                return (
                    <ViewCardProduct key={food.id} img={food.img} name={food.name} price={food.price} onClick={e => this.handleClickFoodSelected(e, food)} />
                )
            })

        const DataMenuDessert =
            jsonData.Desserts.map((food) => {
                return (
                    <ViewCardProduct key={food.id} img={food.img} name={food.name} price={food.price} onClick={e => this.handleClickFoodSelected(e, food)} />
                )
            })

        const { foodSelected } = this.state;
        
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

                <div className="container-btns-menu">
                    <button className="Button-register btn-Menu" onClick={this.showBreakfast.bind(this)}>Desayuno</button>
                    <button className="Button-register btn-Menu" onClick={this.showLunchAndDinner.bind(this)}>Almuerzo y cena</button>
                    <button className="Button-register btn-Menu" onClick={this.showDessert.bind(this)}>Postres</button>
                </div>

                <div className="container-menu-orders">

                    <div className="container-card-product">
                        {this.state.modalOn && this.showingModal(foodSelected)}
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