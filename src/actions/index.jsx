import { SIGNED_IN, SET_TASKS} from '../constants';

export function logUser(email){
  const action =  {
    type:SIGNED_IN,
    email
  }
  return action;
}

export function setTasks(tasks){
  const action = {
    type: SET_TASKS,
    tasks
  }
  return action
}
