import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import firebase from '../firebaseConfig/firebase.js';
import logoHeader from '../assets/images/logo1W.png';
import '../assets/css/HeaderMenu.css';


class Navbar extends React.Component {

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }

  logOut = () => {
    firebase.auth().signOut();


  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src={logoHeader} className="Logo-Header" alt="logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">

            <li className={this.getNavLinkClass("/home")}><NavLink to="/home" >Inicio</NavLink></li>
            <li className={this.getNavLinkClass("/menu")}><NavLink to="/menu">Menú</NavLink></li>
            <li className={this.getNavLinkClass("/orderchef")}><NavLink to="/orderchef">Pedidos chef</NavLink></li>
            <li className={this.getNavLinkClass("/orderwaiter")}><NavLink to="/orderwaiter">Pedidos mesero</NavLink></li>

          </ul>

          <span className={this.getNavLinkClass("/login")} onClick={() => this.logOut("/login")}>
            <NavLink to="/login">
              <p className="textLogOut">Cerrar sesión</p>
            </NavLink>
          </span>
        </div>

      </nav>
    )
  }
};
Navbar = withRouter(Navbar);
export default Navbar;
