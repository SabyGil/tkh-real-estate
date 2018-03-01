
import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { Header }  from './Header';
import Home from './Home';
// import Listings from './Listings';
// import Filter from './Filter';
import { HashRouter as Router, Switch, Route  } from 'react-router-dom';
import HeaderTwo from './HeaderTwo';
import App from '../App';


// const route = [
//     {
//       path: '/listings',
//       exact: true,
//       sidebar: () => <Filter />,
//       main: () => <Listings />
//     }
// ];
const Routes = () => (
  <Router>
    <main>
      <Route exact path="/" component={Home}/>
      <Route exact path='/listings' component={App}/>
    </main>
 </Router>
);

export default Routes;
