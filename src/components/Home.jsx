import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
//import ViewMenu from './Menu.jsx';
//import ViewOrderChef from './OrderChef.jsx';


const ViewHome = () => {

    return(
      <div className="Container-home">
       
        <h1>Selecciona tu rol</h1>
        <button className = "Button-register"><Link to='/menu'>Mesero</Link></button>
        <button className = "Button-register"><Link to='/orderchef'><FontAwesomeIcon icon="utensils" />Cocinero</Link></button>
      </div>

    )
}

export default ViewHome;