// export (listing) => {
//   return {
//     type: 'SELECT_LISTING',
//     payload: listing
//   };
// }
export function filterListings(listing) {
  return {
    type: 'FILTER_LISTING',
    payload: listing 
  }
}
