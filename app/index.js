import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Full from './containers/Full';
import Routes  from './components/Router';

import '../scss/index.scss';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';
// import rootReducer from './reducers/index';

// import reducerContacts from './reducers/reducer_contacts';
// let store = createStore(reducerContacts);
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const createStoreWithMiddleware = applyMiddleware()(createStore);
// store={createStoreWithMiddleware(reducers)}

ReactDOM.render(
      <Routes />,
   document.getElementById('app')
);

// ReactDOM.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App store={store}/>
//     </Provider>
//   </BrowserRouter>,
//    document.getElementById('app')
// );
