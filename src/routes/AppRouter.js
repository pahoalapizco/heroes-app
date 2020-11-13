import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../components'
import DashboardRouter from './DashboardRouter';
import { AuthContext } from './../auth/AuthContext';
const AppRouter = () => {
  const { user: { logged } } = useContext(AuthContext);
  
  return (
    <Router>
      <div>
        <Switch>         
          <PublicRoute
            exact path="/login" 
            isAuthenticated={ logged }
            component={ LoginScreen }
          />   
          
          <PrivateRoute
            path="/" 
            isAuthenticated={ logged }
            component={ DashboardRouter } 
          />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
