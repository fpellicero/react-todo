import _ from 'lodash';

const addNewParentTask = (state, task) => {
    let newArray = state.slice();
    newArray.push(task);
    return newArray;
}

const addNewSubtask = (state, parentId, task) => {
    let newArray = state.slice();
    const parentTaskIndex = _.findIndex(newArray, {id: parentId});
    if (!(newArray[parentTaskIndex].childTasks)) newArray[parentTaskIndex].childTasks = [];
    newArray[parentTaskIndex].childTasks.push(task);
    console.log(newArray);
    return newArray;
}

const taskListReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TASK':
            if(!action.value.parentId) return addNewParentTask(state, action.value);
            return addNewSubtask(state, action.value.parentId, action.value);
        case 'REMOVE_TASK':
            let newState = [];
            for (var i = 0; i < state.length; i++) {
                let task = state[i];
                if(task.id == action.value) continue;

                newState.push(task);
            }
            return newState;
        
        default:
            return state;
    }
}

export default taskListReducer;