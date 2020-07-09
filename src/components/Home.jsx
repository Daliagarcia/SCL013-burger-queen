import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
//import fondoHome from '../assets/images/fondoHome.jpg';
 

/* let sectionStyle = {
  width:"100%",
  height:"400px",
  backgroundImage: `url(${fondoHome})`

}; */

const ViewHome = () => {

    return(

      <div className="Container-home">

       <h1>Selecciona tu rol</h1>

        <Link to='/menu'>
          <button className = "Button-register">
                <FontAwesomeIcon className="icon" icon="utensils" /> 
                <p className="textBtnHome">Mesero</p>
          </button>
        </Link>

        <Link to='/orderchef'>
          <button className = "Button-register">
                <FontAwesomeIcon className="icon" icon="hamburger" /> 
                <p className="textBtnHome textCocinero">Cocinero</p>
          </button>
        </Link>

      </div>

      
    )
}

export default ViewHome;