import React, { Component } from 'react';
import '../assets/css/Menu.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import OrderDetails from './componentsMenu/OrdersDetails';
import ViewCardProduct from './componentsMenu/CardProducts';
import jsonData from "../dataMenu/DataFood.json";
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
//import ModalHeader from 'react-bootstrap/esm/ModalHeader';
//import { ModalTitle, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';


class MenuProducts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            foodSelected: null,
            option: null,
            extra: [],
            modalOn: false
        }

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


    //FUNCIÓN PARA SELECCIONAR CON CLICK LA COMIDA DEL MENÚ
    handleClickFoodSelected = (event, food) => {
        event.preventDefault();
        console.log('-food', food)
        console.log(food.option)
        //condición que verifica si el producto tiene opciones de proteína
        if (typeof food.option === "undefined" && typeof food.extras === "undefined") {
            return this.props.addFoodOrder(food);
        }
        //Actualiza el state del modal a true y le pasa el value de food al state de foodSelected
        this.setState({
            foodSelected: food,
            modalOn: true
        })/*, () => {
            this.state.modalOn && this.showingModal(this.state.foodSelected);
        })*/
    }

    //Función para crear el modal
    showingModal(food) {
        return (
            <Modal key={`modal-${food.id}`} show={this.state.modalOn} onHide={() => this.modalOff()} >
                <ModalHeader closeButton >
                    <ModalTitle>{food.name}</ModalTitle> <span className="close" >X</span>
                </ModalHeader>

                <ModalBody >
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
                            {food.extras.map((extra) => {
                                return (
                                    <label className="container" key={extra.id}  >
                                        <input key={extra.id} type="radio" value={extra.name} name={`${extra.name} ${extra.price}`} />
                                        {extra.name} $ {extra.price} </label>

                                )
                            })}

                        </div>


                    </div>

                </ModalBody>

                <ModalFooter className="modal-footer">
                    <button type="button" className="secondary">Close</button>
                    <button type="button" className="primary" onClick={this.addProductsModal()} >Agregar</button>
                </ModalFooter>
            </Modal>




        )
    }

    render() {

        //LEER DATA DEL MENÚ Y MOSTRAR CARDS CON CADA ITEM DEL MENÚ 
        
        const dataMenu = this.props.dataMenu.map((food) => {
                return (

                   /*  <button className="card" style={{ width: '10rem', height: '15rem' }} onClick= {e => this.handleClickFoodSelected(e, food)} key={food.id}>
                        <div className="card-body">
                            <img src={food.img} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-footer" > <p>{food.name}</p> <p>$ {food.price}</p> </div>
                    </button> */
                    <ViewCardProduct key={food.id} img={food.img} name={food.name} price={food.price} onClick={e => this.handleClickFoodSelected(e, food)} />
                )
            })

            console.log(dataMenu);

        /*const DataMenuLunch =
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
            })*/

        const { foodSelected, modalOn } = this.state;

        return (
            <div className="container-card-product">
                {modalOn && this.showingModal(foodSelected)}
                <div>{dataMenu} </div>

            </div>

        )
    }
}

class MenuButtons extends Component {

    state = {
         breakfast: false,
         lunch: false,
         dessert: false,
     };
     
    
     
     //FUNCIONES PARA MOSTRAR Y OCULTAR SEGÚN EL BOTOÓN DEL MENÚ SELECCIONADO
    /* showBreakfast = () => {
         this.setState({
             breakfast: !this.state.breakfast,
             lunch: false,
             dessert: false
         })
     }
 
     showLunchAndDinner = () => {
         this.setState({
             breakfast: false,
             lunch: !this.state.lunch,
             dessert: false
         })
     }
 
     showDessert = () => {
         this.setState({
             breakfast: false,
             lunch: false,
             dessert: !this.state.dessert
         })
     }*/
 
     selectMenuByCategory(category) {
         console.log(category)
         return jsonData.filter((menu) => {
             return menu.category === category;
             
         })
         
     }
 
     render() {
 
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
 
             <div>
 
                 <div className="container-btns-menu">
                     <button className="Button-register btn-Menu" onClick={showBreakfast}>Desayuno</button>
                     <button className="Button-register btn-Menu" onClick={showLunchAndDinner}>Almuerzo y cena</button>
                     <button className="Button-register btn-Menu" onClick={showDessert}>Postres</button>
                 </div>
 
 
                     {this.state.breakfast ? (
                         <MenuProducts 
                         addFoodOrder={this.props.addFoodOrder} 
                         dataMenu={this.selectMenuByCategory("breakfast")} />
                     ) : null }
                     {this.state.lunch ? (
                         <MenuProducts 
                         addFoodOrder={this.props.addFoodOrder} 
                         dataMenu={this.selectMenuByCategory("lunch and dinner")} />
                     ) : null } 
                     { this.state.dessert ? (
                         <MenuProducts 
                         addFoodOrder={this.props.addFoodOrder} 
                         dataMenu={this.selectMenuByCategory("desserts")} />
                     ) : null }              
                      
 
             </div >
                 
                 
                 
         )
         
     }
  
 }
 
 
 export default MenuButtons;