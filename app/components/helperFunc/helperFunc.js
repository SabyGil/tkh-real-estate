export function change(event){

    let name = event.target.name;
    let value = (event.target.type === 'checkbox') ? event.target.value : event.target.value
    this.setState({
      [name]: value
    },() => {
      console.log(this.state)
      this.filteredData()
    })

}

export function populateForms(){

let cities = this.state.listingsData.map((item) => {
  return item.city
})
cities = new Set(cities) //only unique
cities = [...cities]

cities = cities.sort()

//homeType
let homeTypes = this.state.listingsData.map((item) => {
  return item.homeType
})
homeTypes = new Set(homeTypes)
homeTypes = [...homeTypes]

homeTypes = homeTypes.sort()


//Bedrooms
let bedrooms = this.state.listingsData.map((item) => {
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
  console.log(this.state)
})
}
