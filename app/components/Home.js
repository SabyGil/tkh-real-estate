import React from 'react';
// import { NavOne }  from './NavOne';
import { NavTwo }  from './NavTwo';

class Home extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return (
      <div className="bg-container">
        <div className="black-screen">
          <div className='home-content-container'>
            <h1>Welcome to my Real Estate App</h1>
            <NavTwo />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
