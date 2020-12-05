import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('main'));
import App from './components/App';

// // this creates the store with the reducers, and does some other stuff to initialize devtools
// const store = createStore(reducers, {}, compose(
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
// ));

// // we now wrap App in a Provider
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('main'),
// );
