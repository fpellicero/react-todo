import React from 'react';
import Title from './Title';
import TaskListContainer from '../Containers/TaskListContainer';
import GeneralInputForm from './GeneralInputForm';
import Grid from 'react-bootstrap/lib/Grid';

const TodoApp = ({userName, CreateTask, SetUsername}) => {
  
  const _createTask = (task) => {
    if(userName == null) {
      alert("You need a username");
      return;
    }
    
    CreateTask(task);
  }

  return (
    <Grid>
      <Title title="My ToDo App" />
      <UserNameInput userName={userName} SetUsername={SetUsername} />
      <hr/>
      <GeneralInputForm onInput={_createTask} placeholder="Create Task"/>
      <TaskListContainer />
    </Grid>
    )
  }
  
  const UserNameInput = ({userName, SetUsername}) => {
    if(userName) {
      return(<div> Welcome back {userName}!</div>);
    }
    return(<GeneralInputForm onInput={SetUsername} placeholder="Set a Username"/>)
  }
    
    export default TodoApp;