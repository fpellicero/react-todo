
export default function(state = "", action) {
    switch(action.type) {
        case 'SET_USERNAME':
            return action.value;
        default: 
            return state;
    }
}