import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Header }  from './Header';
import Home from './Home';
import Listings from './Listings';

const Routes = () => (
   <main>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/listings' component={Listings} />
     </Switch>
  </main>
);

export default Routes;
