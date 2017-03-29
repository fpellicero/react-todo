import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  _onClick(e) {
    e.preventDefault();
    let task = ReactDOM.findDOMNode(this.input).value;

    if(typeof this.props.onInput === "function") this.props.onInput(task);
  }

  render() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <FormControl
            type="text"
            placeholder={this.props.placeholder}
            ref={(input) => {this.input = input;}} />
        </FormGroup>
        <Button type="submit" onClick={this._onClick}>
          Go!
        </Button>
      </Form>
    )
  }
}

export default TaskForm;
