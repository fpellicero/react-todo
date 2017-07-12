import {connect} from 'react-redux';
import {removeTask, addTask} from '../actions/tasks';
import TaskList from '../Components/TaskList';

const mapStoreToProps = (store) => {
    return {
        tasks: store.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => {dispatch(removeTask(id))},
        addTask: (id, parentId) => {dispatch(addTask(id, parentId))}
    }
}

const TaskListContainer = connect(mapStoreToProps, mapDispatchToProps)(TaskList);

export default TaskListContainer;