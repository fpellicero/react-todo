import React, {Component} from 'react';
import Task from './Task';
import ListGroup from 'react-bootstrap/lib/ListGroup'

class TaskList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return(
      <ListGroup>
          {this.props.tasks.map((task, i) =>
            <Task key={`task_${i}`} task={task} deleteTask={this.props.deleteTask} onAddSubTask={this.props.addSubTask}/>
          )}
      </ListGroup>
    )
  }
}

export default TaskList;
