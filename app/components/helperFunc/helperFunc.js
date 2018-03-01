export function change(){
  let name = event.target.name;
  let value = (event.target.type === 'checkbox') ? event.target.value : event.target.value
  this.setState({
    [name]: value
  },() => {
    // console.log(this.state)
    this.filteredData()
  })
}
