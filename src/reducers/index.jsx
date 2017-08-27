import {combineReducers} from 'redux';
import user from './reducer_users';
import tasks from './reducer_tasks';
import completeTasks from './reducer_completed_tasks';

const allReducers = combineReducers({
    user,
    tasks,
    completeTasks
});

export default allReducers;
