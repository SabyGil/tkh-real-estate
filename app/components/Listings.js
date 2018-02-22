import React from 'react';
import HeaderTwo  from './HeaderTwo';
import Filter from './Filter';
import { connect } from 'react-redux';
import { filterListings } from '../actions/index';
import { populateForms } from './helperFunc/helperFunc';
// import { bindActionCreators } from 'redux';

class Listings extends React.Component {
  constructor(){
    super();
    this.state = {
      // view: '',
      // filteredData: '',
      // populateFormsData: '',
      // listingsData: ''
    }
    this.change = this.change.bind(this);
    this.changeView = this.changeView.bind(this);
    this.loopListings = this.loopListings.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
  }
  componentWillMount(){
    let listingsData = this.props.listingsData.sort((a, b) => {
      return a.price - b.price
    })
    this.setState({
      listingsData,
    }, ()=> {
      console.log(this.state)
    })
  }
  componentDidMount(){
    // let filteredData = this.props.globalState
    let { globalState } = this.props
    this.setState({
    // filteredData,
    globalState
  }, ()=> {
    console.log(this.state + 'hell')
  })

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
    this.setState({
      view: viewName
    })
  }
  //------
  populateForms(){
      //City
    populateFormsListings()
    }
//----
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
  loopListings () {
  let { listingsData } = this.props;
  // let filteredData = this.props.listingsData;
  if(listingsData === undefined || listingsData.length == 0){
    return 'Sorry your filter did not match any listing'
  }
  return listingsData.map((listing, index) => {
    if(this.state.view === 'box') {
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
    let filteredData = this.props.listingsData;
//

    // debugger
    return (
      <div>

        <HeaderTwo />
        <div id='content-area'>

        <section id="listings">
          <section className='search-area'>
            <input type='text' name='search'
              onChange={this.change}
            />
          </section>

          <section className='sortby-area'>
            <div className='results'>
              {this.props.filteredData.length}
              &nbsp; results found
            </div>
            <div className='sort-options'>
              <select name='sortby' className='sortby'
                onChange={this.change}
                >
                <option value='price-dsc'>Lowest Price</option>
                <option value='price-asc'>Highest Price</option>
              </select>
              <div className='view'>
                <i className='fa fa-th-list' aria-hidden='true'
                  onClick={this.changeView.bind(null, 'long')}
                  ></i>
                <i className='fa fa-th' aria-hidden='true'
                  onClick={this.changeView.bind(null, 'box')}
                  ></i>
              </div>
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
    filteredData: state.filteredData,
    listingsData: state.listingsData,
    globalState: state.globalState
  };
};

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ filterListings: filterListings }, dispatch);
// }

export default connect(mapStateToProps)(Listings);
// export default Listings;
