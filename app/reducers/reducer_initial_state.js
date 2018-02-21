// let counter = 0;
// // reducerDefault was reducer name
// export default function ( state = {
//    default: [],
//   }, action) {
//   switch ( action.type ) {
//     case 'ADD_INFO':
//     counter++;
//       return Object.assign({}, state, {
//         default: state.default.concat({
//           city: action.city,
//           homeType: action.homeType,
//           bedrooms: action.bedrooms,
//           min_price: action.min_price,
//           max_price: action.max_price,
//           min_floor_space: action.min_floor_space,
//           max_floor_space: action.max_floor_space,
//           elevator: action.elevator,
//           finished_basement: action.finished_basement,
//           gym: action.gym,
//           swimming_pool: action.swimming_pool,
//           populateFormsData: action.state.populateFormsData,
//           sortby: action.sorby,
//           view: action.view,
//           search: action.search,
//           id: counter })
//       });
//
//       //
//       // case "DELETE_CONTACT":
//       //  return Object.assign({}, state, {
//       //    contacts: state.contacts.filter((contact) => contact.id !== action.id)
//       //  });
//
//       default:
//         return state;
//   }
// };
