import React from 'react';
// import { Routes } from './components/Router';
import Routes from './components/Router';
// import { connect } from 'react-redux';
import { Header }  from './components/Header';
import Home from './components/Home';
import Listings from './components/Listings';
import Filter from './components/Filter';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      // listingsData,
      city: 'All',
      homeType: 'All',
      bedrooms: '0',
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      // filteredData: listingsData,
      populateFormsData: '',
      sorby: 'price-dsc',
      view: 'box',
      search: ''
    }
    // this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    // this.populateForms = this.populateForms.bind(this);
    // this.changeView = this.changeView.bind(this);
  }
  filteredData(){
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <=
      this.state.max_price && item.floorSpace >= this.state.min_floor_space &&
      item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms
    })
    if(this.state.city != 'All'){
      newData = newData.filter((item) =>{
        return item.city == this.state.city
      })
    }

    if(this.state.homeType != 'All'){
      newData = newData.filter((item) =>{
        return item.homeType == this.state.homeType
      })
    }

    if(this.state.sortby == 'price-dsc'){
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    if(this.state.sortby == 'price-asc'){
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if(this.state.search != ''){
      newData = newData.filter((item) => {
        let city = item.city.toLowerCase();
        let searchText = this.state.search.toLowerCase();
        let n = city.match(searchText);

        if(n != null){
          return true
        }
      })
    }

    this.setState({
      filteredData: newData
    })
  }
  render(){
    return (
      <div className='app'>



      </div>
    );
  }
}

export default App;
