import {combineReducers} from 'redux';
import user from './reducer_users';
import tasks from './reducer_tasks';

const allReducers = combineReducers({
    user,
    tasks
});

export default allReducers;
