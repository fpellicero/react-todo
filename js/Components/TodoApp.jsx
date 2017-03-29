import React, {Component} from 'react';
import Title from './Title';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Grid from 'react-bootstrap/lib/Grid';
import _ from 'lodash';


class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = this._getInitialState();
    this.lastId = 0;

    this._createTask = this._createTask.bind(this);
    this._deleteTask = this._deleteTask.bind(this);
    this._onAddSubtask = this._onAddSubtask.bind(this);
  }

  _getInitialState() {
    return {
      tasks: []
    }
  }

  _createTask(task) {
    let tasks = this.state.tasks.slice();

    let taskObject = {
      id: ++this.lastId,
      task: task
    };
    console.log(this.lastId);
    tasks.push(taskObject);

    this.setState({
      tasks: tasks
    })
  }

  _deleteTask(taskId) {
    let tasks = this.state.tasks;

    let newTasks = [];
    for (var i = 0; i < tasks.length; i++) {
      let task = tasks[i];
      if(task.id == taskId) continue;
    }

    this.setState({
      tasks: newTasks
    });
  }

  _onAddSubtask(newTask, parentId) {
    console.log('ADDING');
    const tasks = this.state.tasks;
    const parentTaskIndex = _.findIndex(tasks, {id: parentId});
    console.log('index  : ' + parentTaskIndex);
    if (!(tasks[parentTaskIndex].childTasks)) tasks[parentTaskIndex].childTasks = [];
    tasks[parentTaskIndex].childTasks.push({id: ++this.lastId, task: newTask});
    console.log(tasks);
    this.setState({tasks});
  }

  render() {
    return(
      <Grid>
        <Title title="My ToDo App" />
        <TaskForm onInput={this._createTask}/>
        <TaskList tasks={this.state.tasks} deleteTask={this._deleteTask} addSubTask={this._onAddSubtask} />
      </Grid>
    )
  }
}

export default TodoApp;
