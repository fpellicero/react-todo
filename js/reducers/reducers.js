import taskListReducer from './tasks';
import userNameReducer from './username';
import {combineReducers} from 'redux';

export default combineReducers({
    UserName: userNameReducer,
    tasks: taskListReducer
});