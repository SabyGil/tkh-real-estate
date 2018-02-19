import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Routes from '../components/Router';
import HeaderTwo from '../components/HeaderTwo';

// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
// import { bindActionCreators } from 'redux';

class Full extends React.Component {

  render(){
    return (
      <div className="">
        {/* <HeaderTwo /> */}
        <div className='app-body'>
          <Routes />
        </div>
      </div>
    )
  }
}

export default Full;
