import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

const Task = (props) => {
  return (
    <ListGroupItem>
      {props.task}
    </ListGroupItem>
  )
}

export default Task;
