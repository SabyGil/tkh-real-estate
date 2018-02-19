import React from 'react';
import { NavTwo }  from './NavTwo';
import { Header }  from './Header';

class Home extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return (
      <div className="landing-page-bg">
      <Header />
        <div className='home-content-container'>
          <h1>Welcome to my Real Estate App</h1>
          <NavTwo />
        </div>
      </div>
    );
  }
}

export default Home;
