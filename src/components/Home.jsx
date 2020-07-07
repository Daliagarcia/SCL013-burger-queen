import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
import fondoHome from '../assets/images/fondoHome.jpg';
 

/* let sectionStyle = {
  width:"100%",
  height:"400px",
  backgroundImage: `url(${fondoHome})`

}; */

const ViewHome = () => {

    return(

      <div className="Container-home">

      <img src={fondoHome} className="fondoHome" />

        <h1>Selecciona tu rol</h1>

        <Link to='/menu'>
          <button className = "Button-register">
                <FontAwesomeIcon icon="utensils" /> 
                <p class="textBtnHome">Mesero</p>
          </button>
        </Link>

        <Link to='/orderchef'>
          <button className = "Button-register">
                <FontAwesomeIcon icon="hamburger" /> 
                <p class="textBtnHome textCocinero">Cocinero</p>
          </button>
        </Link>

      </div>

      
    )
}

export default ViewHome;