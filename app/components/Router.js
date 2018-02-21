import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Header }  from './Header';
import Home from './Home';
import Listings from './Listings';
// import { connect } from 'react-redux';

// lifecycle to check props

const Routes = () => (
   <main>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/listings' component={Listings} />
       {/* <Route exact path='/listings'  render={(props)=><Listings
         change={this.props.change}
         changeView={this.props.changeView}
         populateAction={this.props.populateAction}
        />} /> */}
        {/* <Route exact path='/listings' render={(routeProps) => (
            <Listings {...routeProps} change={this.props.change}
            changeView={this.props.changeView}
            populateAction={this.props.populateAction} />
          )} */}
        />
     </Switch>
  </main>
);

// function mapStateToProps(state) {
//
// }

export default Routes;
