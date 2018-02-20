import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Header }  from './Header';
import Home from './Home';
import Listings from './Listings';
// import { connect } from 'react-redux';

const Routes = () => (
   <main>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/listings'  render={()=><Listings  change={this.change}
         globalState={this.props.state}
         changeView={this.props.changeView}/>} />
       {/* <Route exact path='/listings' component={Listings} /> */}
     </Switch>
  </main>
);

// function mapStateToProps(state) {
//
// }

export default Routes;
