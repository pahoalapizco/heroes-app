import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { 
  Navbar,
  MarvelScreeen,
  DcScreen,
  HeroScreen
} from '../components'

const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/marvel" component={ MarvelScreeen } />
          <Route exact path="/dc" component={ DcScreen } />
          <Route exact path="/heroe/:heroeId" component={ HeroScreen } />
        
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
}

export default DashboardRouter;
