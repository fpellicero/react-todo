import React from 'react';
import Task from './Task';
import ListGroup from 'react-bootstrap/lib/ListGroup'

const TaskList = ({tasks, deleteTask, addTask}) => (
  <ListGroup>
      {tasks.map((task, i) =>
        <Task key={`task_${i}`} task={task} deleteTask={deleteTask} onAddSubTask={addTask}/>
      )}
  </ListGroup>
)

export default TaskList;