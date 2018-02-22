import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Header }  from './Header';
import Home from './Home';
import Listings from './Listings';
import Filter from './Filter';
// import { connect } from 'react-redux';

// lifecycle to check props

const route = [
    {
      path: '/listings',
      exact: true,
      sidebar: () => <Filter />,
      main: () => <Listings />
    }
];
const Routes = () => (
 <main>
   {/* <Switch> */}
      <Route exact path="/" component={Home}/>
   {route.map((route, index) => (
     <Route
     key={index}
     path={route.path}
     exact={route.exact}
     component={route.sidebar}
   />
    ))}
    {route.map((route, index) => (
      <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.main}
    />
     ))}
   {/* </Switch> */}
 </main>
);

export default Routes;
