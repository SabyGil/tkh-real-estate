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
      <div>
      <Header />

      <div className="bg-container">
        <div className="black-screen">
          <div className='home-content-container'>
            <h1>Welcome to my Real Estate App</h1>
            <NavTwo />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
