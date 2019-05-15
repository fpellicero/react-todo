import TodoApp from '../Components/TodoApp';
import {connect} from 'react-redux';
import {addTask} from '../actions/tasks';
import {setUsername} from '../actions/username';

const mapStoreToProps = (store) => ({
  userName: store.UserName
});

const mapDispatchToProps = (dispatch) => ({
  SetUsername: (userName) => {dispatch(setUsername(userName));},
  CreateTask: (task) => {dispatch(addTask(task));} 
});
    

const TodoAppContainer = connect(mapStoreToProps, mapDispatchToProps)(TodoApp);
export default TodoAppContainer;