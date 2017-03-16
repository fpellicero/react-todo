import React, {Component} from 'react';
import Title from './Title';
import TaskList from './TaskList';
import Grid from 'react-bootstrap/lib/Grid';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = this._getInitialState();
  }

  _getInitialState() {
    return {
      tasks: [
        'Buy gummies',
        'Conquer the world',
        'Find a cow with wheels'
      ]
    }
  }

  render() {
    return(
      <Grid>
        <Title title="My ToDo App" />
        <TaskList tasks={this.state.tasks} />
      </Grid>
    )
  }
}

export default TodoApp;
