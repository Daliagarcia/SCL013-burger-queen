import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import RegisterUser from '../components/AuthRegister';
import LoginUser from '../components/AuthLogin';
import '../components/fontAwesoneIcons/FontAwesone.jsx';
import ViewMenu from '../components/Menu.jsx';
import ViewHome from '../components/Home.jsx';
import ViewOrderChef from '../components/OrderChef.jsx';
import ViewOrderWaiter from '../components/OrderWaiter.jsx';

export const AppRouter = () => {
    return (
      <Router>
        <div>  
          <Switch>
            <Route path = '/home' component = {ViewHome} />
            <Route path = '/menu' component = {ViewMenu} />
            <Route path = '/orderwaiter' component = {ViewOrderWaiter} />
            <Route path = '/orderchef' component = {ViewOrderChef} />
            <Route path = '/login' component = {LoginUser} />
            <Route exact path = '/' component = {RegisterUser} />
          </Switch>
        </div>
      </Router>
    );
  }
  