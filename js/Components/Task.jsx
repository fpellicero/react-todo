import React, {Component} from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import {Button} from 'react-bootstrap';
import GeneralInputForm from './GeneralInputForm';

class Task extends Component {
    constructor(props) {
        super(props);

        this._onAddSubtask = this._onAddSubtask.bind(this);
    }

    _onAddSubtask(newTask) {
      const parentId = this.props.task.id;
      this.props.onAddSubTask(newTask, parentId);
    }

    _renderChildTasks() {
        const {childTasks} = this.props.task;
        if(!childTasks) return null;
        return (childTasks.map((child, index) => (
            <div style={{'margin-left': '15px'}} key={`${child}_${index}`}>{child.task}</div>
        )));
    }

    render() {
        const{task, deleteTask} = this.props;
        const style = {
            position: 'absolute',
            right: '3px',
            top: '3px'
        };
        return (
            <ListGroupItem>
                {this.props.task.task}
                {this._renderChildTasks()}
                <GeneralInputForm onInput={this._onAddSubtask} placeholder="Add subtask" style={style}/>
                <Button type="submit" onClick={() => {deleteTask(task.id);}} style={style}>
                    Delete
                </Button>
            </ListGroupItem>
        )
    }
}

export default Task;
