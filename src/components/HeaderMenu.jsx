import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LoginUser from './AuthLogin.jsx';
import Menu from './Menu.jsx';
import Home from './Home.jsx';
import OrderChef from './OrderChef.jsx';
import OrderWaiter from './OrderWaiter.jsx'

const HeaderMenu = () => {

return(
    
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/home'>Inicio</Link>
                </li>
                <li>
                  <Link to='/menu'>Menu</Link>
                </li>           
                <li>
                    <Link to='/orderchef'>Pedidos Chef</Link>
                </li>
                <li>
                    <Link to='/orderwaiter'>Pedidos Mesero</Link>
                </li>                               
                <li>
                  <Link to='/login'>Cerrar sesion</Link>
                </li>
              </ul>
            </nav>
    
            
            <Switch>
              <Route path = '/home' component = {Home} />
              <Route path = '/menu' component = {Menu} />
              <Route path = '/orderchef' component = {OrderChef} />
              <Route path = '/orderwaiter' component = {OrderWaiter} />
              <Route path = '/login' component = {LoginUser} />
            </Switch>
          </div>
        </Router>
      );

}

export default HeaderMenu;