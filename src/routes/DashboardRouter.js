import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { 
  Navbar,
  MarvelScreeen,
  DcScreen,
  HeroScreen,
  SearchScreen,
} from '../components'

const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={ MarvelScreeen } />
          <Route exact path="/dc" component={ DcScreen } />
          <Route exact path="/heroe/:heroeId" component={ HeroScreen } />
          <Route exact path="/search" component={ SearchScreen } />
        
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
}

export default DashboardRouter;
