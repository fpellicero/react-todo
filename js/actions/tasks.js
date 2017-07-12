let lastId = 0;

export const ADD_TASK = 'ADD_TASK';
export const addTask = (text, parentId = null) => {
    return {
        type: ADD_TASK,
        value: {
            id: ++lastId,
            task: text,
            parentId: parentId
        }
    }
}

export const REMOVE_TASK = 'REMOVE_TASK';
export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        value: id
    }
}