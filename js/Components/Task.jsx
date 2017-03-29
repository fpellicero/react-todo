import React, {Component} from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import {Button} from 'react-bootstrap';

class Task extends Component {
    constructor(props) {
        super(props);

        this._delete = this._delete.bind(this);
    }

    _onClick() {
        console.log('clicked');
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
                <Button type="submit" onClick={this._onClick} style={style}>
                    Add subtask
                </Button>
                <Button type="submit" onClick={this._delete} style={style}>
                    Delete
                </Button>
            </ListGroupItem>
        )
    }
}

export default Task;
