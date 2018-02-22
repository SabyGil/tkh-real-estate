import React from 'react';
// import { Routes } from './components/Router';
import Routes from './components/Router';
import { connect } from 'react-redux';
// import { Header }  from './components/Header';
// import listingsData from './components/data/listingsData';
import { change } from './components/helperFunc/helperFunc';

class App extends React.Component {
  constructor () {
    super();
    this.state = {

    // }
    // this.change = this.change.bind(this);
    // this.filteredData = this.filteredData.bind(this);
    // this.populateForms = this.populateForms.bind(this);
    // this.changeView = this.changeView.bind(this);
  }
}
//   componentWillMount(){
//   let listingsData = this.props.listingsData.sort((a, b) => {
//     return a.price - b.price
//   })
//   this.setState({
//     listingsData
//   })
// }
//*****
// changeListings(event){
//   change()
// }
// changeView(viewName){
//   this.setState({
//     view: viewName
//   })
// }
//*****


  // filteredData(){
  //   var newData = this.state.listingsData.filter((item) => {
  //     return item.price >= this.state.min_price && item.price <=
  //     this.state.max_price && item.floorSpace >= this.state.min_floor_space &&
  //     item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms
  //   })
  //   if(this.state.city != 'All'){
  //     newData = newData.filter((item) =>{
  //       return item.city == this.state.city
  //     })
  //   }
  //
  //   if(this.state.homeType != 'All'){
  //     newData = newData.filter((item) =>{
  //       return item.homeType == this.state.homeType
  //     })
  //   }
  //
  //   if(this.state.sortby == 'price-dsc'){
  //     newData = newData.sort((a, b) => {
  //       return a.price - b.price
  //     })
  //   }
  //
  //   if(this.state.sortby == 'price-asc'){
  //     newData = newData.sort((a, b) => {
  //       return b.price - a.price
  //     })
  //   }
  //
  //   if(this.state.search != ''){
  //     newData = newData.filter((item) => {
  //       let city = item.city.toLowerCase();
  //       let searchText = this.state.search.toLowerCase();
  //       let n = city.match(searchText);
  //
  //       if(n != null){
  //         return true
  //       }
  //     })
  //   }
  //
  //   this.setState({
  //     filteredData: newData
  //   })
  // }
//   populateForms(){
//   //City
//   let cities = this.state.listingsData.map((item) => {
//     return item.city
//   })
//   cities = new Set(cities) //only unique
//   cities = [...cities]
//
//   cities = cities.sort()
//
//   //homeType
//   let homeTypes = this.state.listingsData.map((item) => {
//     return item.homeType
//   })
//   homeTypes = new Set(homeTypes)
//   homeTypes = [...homeTypes]
//
//   homeTypes = homeTypes.sort()
//
//
//   //Bedrooms
//   let bedrooms = this.state.listingsData.map((item) => {
//     return item.city
//   })
//   bedrooms = new Set(bedrooms)
//   bedrooms = [...bedrooms]
//
//   this.setState({
//     populateFormsData: {
//       homeTypes,
//       bedrooms,
//       cities
//     }
//   }, () => {
//     console.log(this.state)
//   })
// }
  render(){
    // let listingsData = this.props.listingsData;
    // debugger
    return (
      <div className='app'>

        <Routes />
        {/* {this.props.listingsData.map((listing, i) => {
          return (
            <span key={listing.i}>{listing.city}</span>
          )
        })} */}
        {/* {(event) => this.setDefaultState(event)} */}
        {/* {this.setDefaultState()} */}
        </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     listingsData: state.listingsData
//   };
// }

// export default connect(mapStateToProps)(App);
// export default App;
// export default connect(undefined)(App);
