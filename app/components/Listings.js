import React from 'react';
import HeaderTwo  from './HeaderTwo';
import Filter from './Filter';
import { connect } from 'react-redux';
import { filterListings } from '../actions/index';
import { bindActionCreators } from 'redux';

class Listings extends React.Component {
  constructor(){
    super();
    this.state = {


    }
    this.change = this.change.bind(this);
    this.populateForms = this.populateForms.bind(this);
    this.changeView = this.changeView.bind(this);
    this.loopListings = this.loopListings.bind(this);
  }
  change(event){
    let name = event.target.name;
    let value = (event.target.type === 'checkbox') ? event.target.value : event.target.value
    this.setState({
      [name]: value
    },() => {
      console.log(this.state)
      this.filteredData()
    })
  }
  changeView(viewName){
    // this.setState({
    //   view: viewName
    // })
    this.props.globalState.setState({
      view: viewName
    })
  }
  populateForms(){
  //City
  let cities = this.props.globalState.listingsData.map((item) => {
    return item.city
  })
  cities = new Set(cities) //only unique
  cities = [...cities]

  cities = cities.sort()

  //homeType
  let homeTypes = this.props.globalState.listingsData.map((item) => {
    return item.homeType
  })
  homeTypes = new Set(homeTypes)
  homeTypes = [...homeTypes]

  homeTypes = homeTypes.sort()


  //Bedrooms
  let bedrooms = this.props.globalState.listingsData.map((item) => {
    return item.city
  })
  bedrooms = new Set(bedrooms)
  bedrooms = [...bedrooms]

  this.setState({
    populateFormsData: {
      homeTypes,
      bedrooms,
      cities
    }
  }, () => {
    console.log(this.props.globalState)
  })
}
  loopListings () {
  let { listingsData } = this.props;
  let filteredData = this.props.listingsData;
  if(listingsData === undefined || listingsData.length == 0){
    return 'Sorry your filter did not match any listing'
  }
  return listingsData.map((listing, index) => {
    if(this.props.view === 'box') {
      //THIS IS BOX VIEW
      return (<div className='col-md-3' key={index}>
        <div className='listing'>
        <div className='listing-img' style={{ background: `url('${listing.image}')
          no-repeat center center`}}>
          <span className='address'>{listing.address}</span>
          <div className='details'>

            <div className='col-md-3'>
              <div className="user-img"> </div>
            </div>

            <div className='col-md-9'>

              <div className='user-details'>
                <span className='user-name'>Nina Smith</span>
                <span className='post-date'>05/05/2017</span>
              </div>
              <div className='listing-details'>
                <div className='floor-space'>
                  <i className='fa fa-square-o' aria-hidden='true'></i>
                  <span>{listing.floorSpace} ft&sup2;</span>
                </div>
                <div className='bedrooms'>
                  <i className='fa fa-bed' aria-hidden='true'></i>
                  <span>{listing.rooms} bedrooms</span>
                </div>
              </div>
              <div className='view-btn'>
                View Listing
              </div>
            </div>

          </div>
        </div>
        <div className='bottom-info'>
          <span className='price'>${listing.price}</span>
          <span className='location'><i className='fa fa-map-marker' aria-hidden='true'></i> {listing.city}, {listing.state}</span>
        </div>
      </div>
    </div>)
  } else{
    //THIS IS LONG VIEW
    return (<div className='col-md-12 col-lg-6' key={index}>
      <div className='listing'>
        <div className='listing-img' style={{ background: `url('${listing.image}')
          no-repeat center center`}}>
          <span className='address'>{listing.address}</span>
          <div className='details'>

            <div className='col-md-3'>
              <div className="user-img"> </div>
            </div>

            <div className='col-md-9'>

              <div className='user-details'>
                <span className='user-name'>Nina Smith</span>
                <span className='post-date'>05/05/2017</span>
              </div>
              <div className='listing-details'>
                <div className='floor-space'>
                  <i className='fa fa-square-o' aria-hidden='true'></i>
                  <span>{listing.floorSpace} &sup2;</span>
                </div>
                <div className='bedrooms'>
                  <i className='fa fa-bed' aria-hidden='true'></i>
                  <span>{listing.rooms} bedrooms</span>
                </div>
              </div>
              <div className='view-btn'>
                View Listing
              </div>
            </div>

          </div>
        </div>
        <div className='bottom-info'>
          <span className='price'>${listing.price}</span>
          <span className='location'><i className='fa fa-map-marker' aria-hidden='true'></i> {listing.city}, {listing.state}</span>
        </div>
      </div>
    </div>)

  }

  })

}
  render(){
    // let { listingsData } = this.props;
    // let listingsData = this.props.listingsData;
    // let filteredData = listingsData;
//
  // let globalState = this.props.globalState.map((val) => {
  //   return val
  // })
//   [ city, homeType, bedrooms, min_price
// , max_pric
// , min_floor_space
// , max_floor_space
// , elevato
// , finished_basement
// , gym
// , swimming_pool
// , populateFormsDat
// , sortby
// , view
// , search
// , id ] =  this.props.globalState
    // debugger
    return (
      <div>

        <HeaderTwo />
        <div id='content-area'>
        <Filter
         change={this.props.change}
          globalState={this.props.globalState}
          populateAction={this.props.populateForms}
        />
        <section id="listings">
          {/* {this.props.listingsData.map((listing, i) => {
            return (
              <span key={listing.i}>{listing.city}</span>
            )
          })} */}
          <section className='search-area'>
            <input type='text' name='search'
              onChange={this.props.change}
            />
          </section>

          <section className='sortby-area'>
            <div className='results'>
              {this.props.filteredData.length}
              results found
            </div>
            <div className='sort-options'>
              <select name='sortby' className='sortby'
                onChange={this.props.change}
                >
                <option value='price-dsc'>Lowest Price</option>
                <option value='price-asc'>Highest Price</option>
              </select>
              {/* <div className='view'>
                <i className='fa fa-th-list' aria-hidden='true'
                  onClick={this.props.globalState.changeView.bind(null, 'long')}
                  ></i>
                <i className='fa fa-th' aria-hidden='true'
                  onClick={this.props.globalState.changeView.bind(null, 'box')}
                  ></i>
              </div> */}
            </div>
          </section>

          <section className='listings-results'>
            <div className='row'>

            { this.loopListings() }
            </div>
          </section>

          <section id='pagination'>
              <ul className='pages'>
                <li>Prevs</li>
                <li className='active'>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>Next</li>
              </ul>
          </section>
        </section>
      </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     listingsData: state.listingsData,
//     filteredData: state.filteredData,
//
//   };
// }

const mapStateToProps = (state) => {
  return {
    listingsData: state.listingsData,
    filteredData: state.filteredData,
    globalState: state.defaultData
  };
};

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ filterListings: filterListings }, dispatch);
// }

export default connect(mapStateToProps)(Listings);
// export default Listings;
