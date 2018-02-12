import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Navigation }  from './Navigation';
import Home from './Home';
// import AddContact from './UserInput';
// import Contacts  from './Contacts';

 const Routes = () => (
   <main>
     {/* <Navigation /> */}
     <Switch>
     <Route exact path='/' component={Home}/>
       {/* <Route exact path='/contacts' component={Contacts} /> */} */}
     </Switch>
  </main>
);

export default Routes;
