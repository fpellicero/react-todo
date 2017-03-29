import React, {Component} from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import {Button} from 'react-bootstrap';

class Task extends Component {
  constructor(props) {
    super(props);
  }

  _onClick() {
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
        <Button type="submit" onClick={this._onClick} style={style}>
          Add subtask
        </Button>
      </ListGroupItem>
    )
  }
}

export default Task;
