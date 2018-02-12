import React from 'react';
import Routes from './components/Router';
import { Header }  from './components/Header';

class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <Header />
        {/* <section id='content-area'>
          <Filter />
          <Listings />
        </section> */}

        <Routes />
      </div>
    );
  }
}

export default App;
