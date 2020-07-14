import React, { Component, Fragment } from 'react';
import '../assets/css/Menu.css';
import MenuProducts from './MenuProducts.jsx';
import jsonData from "../dataMenu/DataFood.json";

class MenuButtons extends Component {

   constructor(props){
       super(props);

       this.state = {
        breakfast: false,
        lunch: false,
        dessert: false
    };
    
   }

    //FUNCIONES PARA MOSTRAR Y OCULTAR SEGÚN EL BOTOÓN DEL MENÚ SELECCIONADO
    /*showBreakfast = () => {
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
                breakfast: true,
                lunch: false,
                dessert: false

            })
        }

        const showLunchAndDinner = () => {
            this.setState({
                breakfast: false,
                lunch: true,
                dessert: false

            })
        }

        const showDessert = () => {
            this.setState({
                breakfast: false,
                lunch: false,
                dessert: true

            })
        }
        
        return (

            <Fragment>

                <div className="container-btns-menu">
                    <button className="Button-register btn-Menu" onClick={showBreakfast}>Desayuno</button>
                    <button className="Button-register btn-Menu" onClick={showLunchAndDinner}>Almuerzo y cena</button>
                    <button className="Button-register btn-Menu" onClick={showDessert}>Postres</button>
                </div>


                    {this.state.breakfast ? (
                        <MenuProducts 
                        addFoodOrder={this.props.addFoodOrder} 
                        dataMenu={this.selectMenuByCategory("breakfast")} />
                    ) :                
                    this.state.lunch ? (
                        <MenuProducts 
                        addFoodOrder={this.props.addFoodOrder} 
                        dataMenu={this.selectMenuByCategory("lunch and dinner")} />
                    ) : this.state.dessert ? (
                        <MenuProducts 
                        addFoodOrder={this.props.addFoodOrder} 
                        dataMenu={this.selectMenuByCategory("desserts")} />
                    ) : null    }

            </Fragment >
                
                
                
        )
        
    }
 
}


export default MenuButtons;