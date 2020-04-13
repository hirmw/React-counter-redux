

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers  } from 'redux'


//ACTION -> OBJECT WITH NAME/TYPE
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}


//REDUCER ^ ACTION -> STORE/STATE

let initialstate = { 
  result: [{Rock: ['Draw', 'Lost', 'Win'], Scissor: ['Win', 'Drawn', 'Loss'],Paper: ['Loss', 'Win', 'Draw']}]
};

const counter = (state = [], action) => {
  switch(action.type){
    case "INCREMENT":
      return initialstate;
    default:
      return state;
  }
};


//STORE
const store = createStore(
  counter
);

//DISPLAY
store.subscribe(() => console.log(store.getState()));

//DISPATCH -> REDUCER
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

