import {combineReducers} from 'redux';
import UserReducer from './reducer_users';

const allReducers = combineReducers({
    user:UserReducer
});

export default allReducers;
