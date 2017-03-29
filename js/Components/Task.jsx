import React, {Component} from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import {Button} from 'react-bootstrap';
import TaskForm from './TaskForm';

class Task extends Component {
    constructor(props) {
        super(props);

        this._delete = this._delete.bind(this);
        this._onAddSubtask = this._onAddSubtask.bind(this);
    }

    _onAddSubtask(newTask) {
      const parentId = this.props.task.id;
      this.props.onAddSubTask(newTask, parentId);
    }

    _delete() {
        this.props.deleteTask(this.props.task.id);
    }

    render() {
        const style = {
            position: 'absolute',
            right: '3px',
            top: '3px'
        };
        return (
            <ListGroupItem>
                {this.props.task.task}
                {
                  this.props.task.childTasks &&
                  this.props.task.childTasks.map((child, index) => (
                    <div style={{'margin-left': '15px'}} key={`${child}_${index}`}>{child.task}</div>
                  ))
                }
                <TaskForm onInput={this._onAddSubtask} style={style}/>
                <Button type="submit" onClick={this._delete} style={style}>
                    Delete
                </Button>
            </ListGroupItem>
        )
    }
}

export default Task;
