//import pageReducer from './page-reducer.js';
//import thingReducer from './things-reducer.js';
import messageReducer from './sample-reducer.js';
import messageNewReducer from './sample-new-reducer.js';

import {combineReducers} from 'redux';

export const allReducers = combineReducers({
    data : messageReducer,
    newdata: messageNewReducer
    // dataNew: messageNewReducer
});


export const allPageReducer= combineReducers({
    data : messageReducer
});