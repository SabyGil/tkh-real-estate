import React from 'react';
import HeaderTwo  from './HeaderTwo';
import Filter from './Filter';

class Listings extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return (
      <div>
        <HeaderTwo />
        <div id='content-area'>
        <Filter />
        <section id="listings">
          <section className='search-area'>
            <input type='text' name='search'
              // onChange={this.props.change}
            />
          </section>

          <section className='sortby-area'>
            <div className='results'>
              {/* {this.props.globalState.filteredData.length}  */}
              results found
            </div>
            <div className='sort-options'>
              <select name='sortby' className='sortby'
                // onChange={this.props.change}
                >
                <option value='price-dsc'>Lowest Price</option>
                <option value='price-asc'>Highest Price</option>
              </select>
              <div className='view'>
                <i className='fa fa-th-list' aria-hidden='true'
                  // onClick={this.props.changeView.bind(null, 'long')}
                  ></i>
                <i className='fa fa-th' aria-hidden='true'
                  // onClick={this.props.changeView.bind(null, 'box')}
                  ></i>
              </div>
            </div>
          </section>

          <section className='listings-results'>
            <div className='row'>

            {/* { this.loopListings() } */}
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

export default Listings;
