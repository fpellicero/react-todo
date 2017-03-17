import React, {Component} from 'react';
import Title from './Title';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Grid from 'react-bootstrap/lib/Grid';


class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = this._getInitialState();

    this._createTask = this._createTask.bind(this);
  }

  _getInitialState() {
    return {
      tasks: []
    }
  }

  _createTask(task) {
    let tasks = this.state.tasks.slice();

    tasks.push(task);

    this.setState({
      tasks: tasks
    })
  }

  render() {
    return(
      <Grid>
        <Title title="My ToDo App" />
        <TaskForm onInput={this._createTask}/>
        <TaskList tasks={this.state.tasks} />
      </Grid>
    )
  }
}

export default TodoApp;
