export default function (state = null, action) {
  switch(action.type){
    case 'FILTER_LISTING':
    return action.payload;
  }
  return state;
}
