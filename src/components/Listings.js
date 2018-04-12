import React, { Component} from 'react'
import Header from './Header';

export default class Listings extends Component {
  constructor(){
    super();
    this.state = {
    }
    this.loopListings = this.loopListings.bind(this);
  }

  loopListings () {
   let { listingsData } = this.props;
   if(listingsData === undefined || listingsData.length == 0){
     return 'Sorry your filter did not match any listing'
   }
   return listingsData.map((listing, index) => {
     console.log(this.props.globalState.view);
     if(this.props.globalState.view == 'box') {
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
    return (
      <section id="listings">
        <section className='search-area'>
          <input type='text' name='search' onChange={this.props.change} placeholder='search...' />
        </section>

        <section className='sortby-area'>
          <div className='results'>{this.props.globalState.filteredData.length} results found </div>
          <div className='sort-options'>
            <select name='sortby' className='sortby' onChange={this.props.change}>
              <option value='price-dsc'>Lowest Price</option>
              <option value='price-asc'>Highest Price</option>
            </select>
            <div className='view'>
               <i className='fa fa-th-list' aria-hidden='true' onClick={this.props.changeView.bind(null, 'long')}></i>
               <i className='fa fa-th' aria-hidden='true' onClick={this.props.changeView.bind(null, 'box')}></i>
           </div>
          </div>
        </section>

        <section className='listings-results'>
          <div className='row'>

          { this.loopListings() }
          </div>
        </section>


      </section>
    );
  }
}