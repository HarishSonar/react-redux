import React from 'react';
import {render} from 'react-dom';
import {createStore, compose} from 'redux';
import {allReducers} from './reducers/index.js';
import {Provider} from 'react-redux';
import Page from './components/page';
import Basic from './basicExample'


const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );


const store = createStore(
  allReducers,
  {},
  enhancers
);
render(<Provider store={store}><Page/></Provider>, document.getElementById('root'));

require('../../style/style.scss');

/*
function reducer(state ={counter:1}, action) {
	console.log(action);
	switch(action.type) {
		case 'INCREMENT':
			return {counter: state.counter + 1}; 
		case 'DECREMENT':
			return {counter: state.counter - 1};
		default:
			return state;
	}
	return state;
}

const store = createStore(reducer,{counter:4}, enhancers);
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'DECREMENT'});

render(<Provider store={store}><Basic counter='2'/></Provider>, document.getElementById('root'));

*/