import React, {Component} from 'react';
import Title from './Title';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Title title="My ToDo App" />
      </div>
    )
  }
}

export default TodoApp;
