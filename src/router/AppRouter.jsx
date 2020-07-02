import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import RegisterUser from '../components/AuthRegister';
import LoginUser from '../components/AuthLogin';
import '../components/fontAwesoneIcons/FontAwesone.jsx';

export const AppRouter = () => {
    return (
      <Router>
        <div>  
          <Switch>
            <Route path = '/register' component = {RegisterUser} />
            <Route path = '/login' component = {LoginUser} />
          </Switch>
        </div>
      </Router>
    );
  }
  