import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Full from './containers/Full';
import '../scss/index.scss';
// import { HashRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// import rootReducer from './reducers/index';

// import reducerContacts from './reducers/reducer_contacts';
// let store = createStore(reducerContacts);
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const createStoreWithMiddleware = applyMiddleware()(createStore);
// store={createStoreWithMiddleware(reducers)}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
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
