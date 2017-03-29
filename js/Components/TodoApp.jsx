import React, {Component} from 'react';
import Title from './Title';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Grid from 'react-bootstrap/lib/Grid';


class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = this._getInitialState();
    this.lastId = 0;

    this._createTask = this._createTask.bind(this);
    this._deleteTask = this._deleteTask.bind(this);
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
    console.log(taskObject);
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

      newTasks.push(task);
    }

    this.setState({
      tasks: newTasks
    });
  }

  render() {
    return(
      <Grid>
        <Title title="My ToDo App" />
        <TaskForm onInput={this._createTask}/>
        <TaskList tasks={this.state.tasks} deleteTask={this._deleteTask} />
      </Grid>
    )
  }
}

export default TodoApp;
