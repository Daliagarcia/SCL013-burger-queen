import React from 'react';
import '../assets/css/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderDetails from './componentsMenu/OrdersDetails';
import NameClient from './componentsMenu/NameClient';


const ViewMenu = (props) => {

    const goBackArrow = () => {
        props.history.push('/home');
    }

    const forwardArrow = () => {
        props.history.push('/orderwaiter');
    }





    return (

        <div className="container-menu">
            <div className="containerArrows">
                <FontAwesomeIcon className="arrows" id="arrowBack" icon="arrow-circle-left" onClick={goBackArrow} />
                <FontAwesomeIcon className="arrows" id="arrowForward" icon="arrow-circle-right" onClick={forwardArrow} />
            </div>

            <NameClient />

            <div className="container-btns-menu">
                <button className="Button-register btn-Menu">Desayuno</button>
                <button className="Button-register btn-Menu">Almuerzo y cena</button>
                <button className="Button-register btn-Menu">Postres</button>
            </div>

            <div className="container-menu-orders">
            
            <div className="container-card-product"></div>

                <OrderDetails />

            </div>

        </div>
    )
}


export default ViewMenu;