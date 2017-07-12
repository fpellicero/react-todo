import React, {Component} from 'react';
import Title from './Title';
import TaskListContainer from '../Containers/TaskListContainer';
import GeneralInputForm from './GeneralInputForm';
import Grid from 'react-bootstrap/lib/Grid';
import {setUsername} from '../actions/username';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this._createTask = this._createTask.bind(this);
  }

  _createTask(task) {
    const {userName, CreateTask} = this.props;
    if(userName == null) {
      alert("You need a username");
      return;
    }

    CreateTask(task);
  }

  _renderUsernameInput() {
    const {userName, SetUsername} = this.props;
    if(userName) {
      return(<div> Welcome back {userName}!</div>);
    }
    return(<GeneralInputForm onInput={SetUsername} placeholder="Set a Username"/>)
  }

  render() {
    return(
      <Grid>
        <Title title="My ToDo App" />
        {this._renderUsernameInput()}
        <GeneralInputForm onInput={this._createTask} placeholder="Create Task"/>
        <TaskListContainer />
      </Grid>
    )
  }
}

export default TodoApp;