import React, { Component, Fragment } from 'react';
import '../../assets/css/Menu.css';
import ViewCardProduct from './CardProducts';
import jsonData from "../../dataMenu/DataFood.json";
import Modal from '../Modal.jsx';

class MenuProducts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            foodSelected: null,
            option: null,
            extras: [],
            modalOn: false
        }
    }

    modalOff = () => {
        this.setState({
            foodSelected: null,
            option: null,
            extras: [],
            modalOn: !this.state.modalOn
        })
    }
    //FUNCIÓN QUE TOMA EL VALOR DEL OPTION SELECCIONADO AL SUCEDER EL CAMBIO
    handleChangeInOption = (ev) => {
        const value = ev.target.value;
        this.setState({
            option: value,
        })
    }
    //FUNCIÓN QUE TOMA EL VALOR DEL EXTRA SELECCIONADO EN EL MODAL
    handleChangeInExtra = (ev) => {
        const extraValue = ev.target.name;
        this.setState((previousState) => ({
            extras: [...previousState.extras, extraValue]
        }))
    }

    //FUNCIÓN PARA ACTUALZAR EL MODAL Y SUS PRODUCTOS
    addProductsModal = () => {

        if (this.state.option === null) {
            alert('Favor elegir un tipo de proteína')
        } else {
            const itemsShowInModal = {
                id: this.state.foodSelected.id,
                name: this.state.foodSelected.name,
                price: this.state.foodSelected.price,
                option: this.state.option,
                extras: this.state.extras
            }

            this.props.addFoodOrder(itemsShowInModal);
            this.modalOff();
        }
    }


    //FUNCIÓN PARA SELECCIONAR CON CLICK LA COMIDA DEL MENÚ
    handleClickFoodSelected = (event, food) => {
        event.preventDefault();
        //console.log('-food', food)
        //condición que verifica si el producto tiene opciones de proteína
        if (typeof food.option === "undefined" && typeof food.extras === "undefined") {
            this.props.addFoodOrder(food);

            return
        }
        //Actualiza el state del modal a true y le pasa el value de food al state de foodSelected
        this.setState({
            foodSelected: food,
            modalOn: true
        })
        console.log('Seteo estado', this.state.foodSelected);
        console.log('seteo food', food)
    }

    //Función para crear el modal
    showingModal(food) {
        //console.log(this.state.modalOn)
        //console.log('option modal', food.option)
        return (
            <Modal
                show={this.state.modalOn}
                closeCallback={this.modalOff}
                customClass="custom_modal_class"
            >
                <Fragment>
                    <div className="modal-header">
                        <h3 className="modal-title">{food.name}</h3> <span onClick={() => this.modalOff()} className="close-modal" >X</span>
                    </div >

                    <div className="modal-body">
                        <div className="row">
                            <div className="container-tipo col-6" onChange={(ev) => this.handleChangeInOption(ev)}>
                                <p className="modal-text" >Elegir tipo</p>
                                {food.option.map((option) => {
                                    return (
                                        <label className="container" key={option.id}>
                                            <input type="radio" value={option.name} name="radio" required />
                                            {" "} {option.name} </label>
                                    )
                                })}

                            </div>

                            <div className="container-extras col-6" onChange={(ev) => this.handleChangeInExtra(ev)}>
                                <p className="modal-text">Elegir extra</p>
                                {food.extras.map((extra) => {
                                    return (
                                        <label className="container" key={extra.id}  >
                                            <input key={extra.id} type="radio" name={`${extra.name} $${extra.price}`} />
                                            {extra.name} $ {extra.price} </label>

                                    )
                                })}

                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="Button-register btn-Menu" onClick={(ev) => this.addProductsModal(ev)} >Agregar</button>
                    </div>

                </Fragment>
            </Modal>

        )
    }


    render() {

        //console.log(this.props.dataMenu)

        //LEER DATA DEL MENÚ Y MOSTRAR CARDS CON CADA ITEM DEL MENÚ 
        const dataMenu = this.props.dataMenu.map((food) => {
            return (

                <ViewCardProduct key={food.id} img={food.img} name={food.name} price={food.price}
                    onClick={e => this.handleClickFoodSelected(e, food)} />
            )
        })

        const { foodSelected, modalOn } = this.state;

        return (
            <div className="container-card-product">
                {modalOn && this.showingModal(foodSelected)}
                {dataMenu}
            </div>
        )
    }
}


//COMPONENTE QUE ENGLOBA LAS CARDS Y FUNCIONALIDAD DE DETALLE DE ORDENES
class MenuButtons extends Component {

    state = {
        breakfast: false,
        lunch: false,
        dessert: false,
    };

    selectMenuByCategory(category) {
        //console.log(category)
        return jsonData.filter((menu) => {
            return menu.category === category;
        })
    }

    render() {

        //CONSTANTES PARA MOSTRAR Y OCULTAR SEGÚN EL BOTÓN DEL MENÚ SELECCIONADO
        const showBreakfast = () => {
            this.setState({
                breakfast: !this.state.breakfast,
                lunch: false,
                dessert: false
            })
        }

        const showLunchAndDinner = () => {
            this.setState({
                breakfast: false,
                lunch: !this.state.lunch,
                dessert: false
            })
        }

        const showDessert = () => {
            this.setState({
                breakfast: false,
                lunch: false,
                dessert: !this.state.dessert
            })
        }

        return (

            <div className="container-btnMenu-cards">

                <div className="container-btns-menu">
                    <button className="Button-register btn-Menu" onClick={showBreakfast}>Desayuno</button>
                    <button className="Button-register btn-Menu" onClick={showLunchAndDinner}>Almuerzo</button>
                    <button className="Button-register btn-Menu" onClick={showDessert}>Postres</button>
                </div>

                {this.state.breakfast ? (
                    <MenuProducts
                        addFoodOrder={this.props.addFoodOrder}
                        dataMenu={this.selectMenuByCategory("breakfast")} />
                ) : null}
                {this.state.lunch ? (
                    <MenuProducts
                        addFoodOrder={this.props.addFoodOrder}
                        dataMenu={this.selectMenuByCategory("lunch and dinner")} />
                ) : null}
                {this.state.dessert ? (
                    <MenuProducts
                        addFoodOrder={this.props.addFoodOrder}
                        dataMenu={this.selectMenuByCategory("desserts")} />
                ) : null}

            </div >

        )
    }
}


export default MenuButtons;