import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
// import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './store'
// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({ allReducers });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);




// applied redux . our store.js was created and connected to react






















// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import './bootstrap.min.css'
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


