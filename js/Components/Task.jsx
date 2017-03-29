import React, {Component} from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import {Button} from 'react-bootstrap';
import TaskForm from './TaskForm';

class Task extends Component {
  constructor(props) {
    super(props);
  }

  _onAddSubtask() {
    console.log('clicked');
  }

  render() {
    const style = {
      position: 'absolute',
      right: '3px',
      top: '3px'
    };
    return (
      <ListGroupItem>
        {this.props.task}
        <TaskForm onInput={this._onAddSubtask} style={style}/>
      </ListGroupItem>
    )
  }
}

export default Task;
