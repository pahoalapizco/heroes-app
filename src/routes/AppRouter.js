import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginScreen } from '../components'
import DashboardRouter from './DashboardRouter';
const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>         
          <Route exact path="/login" component={ LoginScreen }/>   
          
          <Route path="/" component={ DashboardRouter } />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
