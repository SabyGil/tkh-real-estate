import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../scss/index.scss';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'

// import reducerContacts from './reducers/reducer_contacts';
// let store = createStore(reducerContacts);

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
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
