import React, {Component} from 'react';
import Title from './Title';
import TaskList from './TaskList';
import GeneralInputForm from './GeneralInputForm';
import Grid from 'react-bootstrap/lib/Grid';


class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = this._getInitialState();
    this.lastId = 0;

    this._createTask = this._createTask.bind(this);
    this._deleteTask = this._deleteTask.bind(this);
    this._setUserName = this._setUserName.bind(this);
  }

  _getInitialState() {
    return {
      UserName: null,
      tasks: []
    }
  }

  _setUserName(userName) {
    this.setState({
      UserName: userName
    });
  }

  _createTask(task) {
    if(this.state.UserName == null) {
      alert("You need a username");
      return;
    }

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

  _renderUsernameInput() {
    if(this.state.UserName) {
      return(<div> Welcome back {this.state.UserName}!</div>);
    }
    return(<GeneralInputForm onInput={this._setUserName} placeholder="Set a Username"/>)
  }

  render() {
    return(
      <Grid>
        <Title title="My ToDo App" />
        {this._renderUsernameInput()}
        <GeneralInputForm onInput={this._createTask} placeholder="Create Task"/>
        <TaskList tasks={this.state.tasks} deleteTask={this._deleteTask} />
      </Grid>
    )
  }
}

export default TodoApp;
